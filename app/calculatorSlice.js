import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lineItems: [
        {
            priceExcludingGST: 0.0,
            GST: 0.0,
            priceIncludingGST: 0.0
        }
    ]
}

export const calculatorSlice = createSlice({
    name: 'gstCalculator',
    initialState,
    reducers: {
        priceExcludingGSTSet: (state, action) => {
            const { index, value } = action.payload;
            state.lineItems[index].priceExcludingGST = parseFloat(value);
            state.lineItems[index].GST = parseFloat(value) * 0.15;
            state.lineItems[index].priceIncludingGST = parseFloat(value) * 1.15; 
        },
        PriceIncludingGSTSet: (state, action) => {
            const { index, value } = action.payload;
            state.lineItems[index].priceExcludingGST = parseFloat(value) / 1.15;
            state.lineItems[index].GST = (parseFloat(value) / 1.15) * 0.15;
            state.lineItems[index].priceIncludingGST = parseFloat(value);
        },
        lineItemAdded: (state, action) => {
            const index = action.payload;
            state.lineItems.splice(index + 1, 0, {
                priceExcludingGST: 0.0,
                GST: 0.0,
                priceIncludingGST: 0.0
            });
        },
        lineItemRemoved: (state, action) => {
            const index = action.payload;
            state.lineItems.splice(index, 1);
        }
    }
})

export const {
    priceExcludingGSTSet,
    PriceIncludingGSTSet,
    lineItemAdded,
    lineItemRemoved
 } = calculatorSlice.actions;

export default calculatorSlice.reducer;
import { combineReducers } from 'redux';
import { Map, List, fromJS } from 'immutable';

const GST = 0.15;

//Initial state

const initialState = {
    data: Map({
        lineItems: List([
            Map({
                priceExcludingGST: 0.0,
                GST: 0.0,
                priceIncludingGST: 0.0
            })
        ])
    })
}

//Reducers
const prices = (state = initialState, action) => {
    
    switch (action.type) {
        case 'SET_PRICE_EXCLUDING_GST':
            return {
                data: state.data
                    .setIn(['lineItems', action.index, 'priceExcludingGST'], parseFloat(action.value))
                    .setIn(['lineItems', action.index, 'GST'], parseFloat(action.value) * GST)
                    .setIn(['lineItems', action.index, 'priceIncludingGST'], parseFloat(action.value) * (1 + GST))
            };
        case 'SET_PRICE_INCLUDING_GST':
            return {
                data: state.data
                    .setIn(['lineItems', action.index, 'priceExcludingGST'], parseFloat(action.value) / (1 + GST))
                    .setIn(['lineItems', action.index, 'GST'], (parseFloat(action.value) / (1 + GST)) * GST)
                    .setIn(['lineItems', action.index, 'priceIncludingGST'], parseFloat(action.value))

            }
        case 'ADD_LINE_ITEM':
            return {
                data: state.data.update(
                    'lineItems',
                    (lineItems) => lineItems.insert(
                        action.index + 1,
                        Map({
                            priceExcludingGST: 0,
                            GST: 0,
                            priceIncludingGST: 0
                        })
                    )
                )
            };
        case 'REMOVE_LINE_ITEM':
            return {
                data: state.data.update(
                    'lineItems',
                    (lineItems) => lineItems.delete(action.index)
                )
            };
        default:
            return state;
    }
}

const appReducer = combineReducers({
    prices
})

export default appReducer;

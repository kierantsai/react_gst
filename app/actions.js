//Actions

export const setPriceExcludingGST = (value, index) => {
    return {
        type: 'SET_PRICE_EXCLUDING_GST',
        value,
        index
    }
}

export const setPriceIncludingGST = (value, index) => {
    return {
        type: 'SET_PRICE_INCLUDING_GST',
        value,
        index
    }
}

export const addLineItem = (index) => {
    return {
        type: 'ADD_LINE_ITEM',
        index
    }
}

export const removeLineItem = (index) => {
    return {
        type: 'REMOVE_LINE_ITEM',
        index
    }
}

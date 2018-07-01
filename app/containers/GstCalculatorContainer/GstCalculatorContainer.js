import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { setPriceExcludingGST, setPriceIncludingGST, addLineItem, removeLineItem } from '../../actions';
import GstCalculator from '../../components/GstCalculator/GstCalculator';

const mapStateToProps = (state) => {
    return {
        lineItems: state.prices.data.get('lineItems')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetPriceExcludingGST: (price, index) => {
            dispatch(setPriceExcludingGST(price, index));
        },
        onSetPriceIncludingGST: (price, index) => {
            dispatch(setPriceIncludingGST(price, index));
        },
        onAddLineItem: (index) => {
            dispatch(addLineItem(index));
        },
        onRemoveLineItem: (index) => {
            dispatch(removeLineItem(index));
        }
    }
}

export const GstCalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(GstCalculator);
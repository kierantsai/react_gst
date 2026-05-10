import React, { use } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    priceExcludingGSTSet,
    PriceIncludingGSTSet,
    lineItemAdded,
    lineItemRemoved
} from '../../calculatorSlice';
import GstCalculatorHeader from '../../components/GstCalculator/GstCalculatorHeader/GstCalculatorHeader';
import GstCalculatorFooter from '../../components/GstCalculator/GstCalculatorFooter/GstCalculatorFooter';
import GstCalculatorLineItem from '../../components/GstCalculator/GstCalculatorLineItem/GstCalculatorLineItem';
import * as styles from './GstCalculator.module.css';

export default function GstCalculator (props) {

    const lineItems = useSelector((state) => state.gstCalculator.lineItems);
    const dispatch = useDispatch();
    
    var totalExcludingGST = () => {
            var total = 0.0;
            for(var i = 0; i < lineItems.size; i++){
                total = total + lineItems[i].priceExcludingGST;
            }
            return total;
        };

    var totalGST = () => {
            var total = 0.0;
            for(var i = 0; i < lineItems.size; i++){
                total = total + lineItems[i].GST;
            }
            return total;
        };

    var totalIncludingGST = () => {
            var total = 0.0;
            for(var i = 0; i < lineItems.size; i++){
                total = total + lineItems[i].priceIncludingGST;
            }
            return total;
        };

    const gstCalculatorLineItems = lineItems.map(
        (lineItem, index) =>
            <GstCalculatorLineItem key={index} index={index} lineItem={lineItem}
                    onSetPriceExcludingGST={e => dispatch(priceExcludingGSTSet({ index, value: e}))}
                    onSetPriceIncludingGST={e => dispatch(PriceIncludingGSTSet({ index, value: e}))}
                    onAddLineItem={e => dispatch(lineItemAdded(index))}
                    onRemoveLineItem={e => dispatch(lineItemRemoved(index))}
                    disableRemoveButton={lineItems.size <= 1} />
        );
    return (
        <>
            <h1 className={styles.Title}>GST Calculator</h1>
            <div className={styles.GstCalculator}>
                <div className={styles.Grid}>
                    <GstCalculatorHeader />
                    {gstCalculatorLineItems}
                    <GstCalculatorFooter totalExcludingGST={totalExcludingGST()} totalGST={totalGST()} totalIncludingGST={totalIncludingGST()}/>
                </div>
            </div>
        </>
    );
    
}
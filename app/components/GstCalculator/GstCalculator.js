import React from 'react';
import ReactDOM from 'react-dom';
import GstCalculatorHeader from '../../components/GstCalculator/GstCalculatorHeader/GstCalculatorHeader';
import GstCalculatorFooter from '../../components/GstCalculator/GstCalculatorFooter/GstCalculatorFooter';
import GstCalculatorLineItem from '../../components/GstCalculator/GstCalculatorLineItem/GstCalculatorLineItem';
import * as styles from './GstCalculator.module.css';

export default function GstCalculator (props) {

    var totalExcludingGST = () => {
            var total = 0.0;
            for(var i = 0; i < props.lineItems.size; i++){
                total = total + props.lineItems.getIn([i, 'priceExcludingGST']);
            }
            return total;
        };

    var totalGST = () => {
            var total = 0.0;
            for(var i = 0; i < props.lineItems.size; i++){
                total = total + props.lineItems.getIn([i, 'GST']);
            }
            return total;
        };

    var totalIncludingGST = () => {
            var total = 0.0;
            for(var i = 0; i < props.lineItems.size; i++){
                total = total + props.lineItems.getIn([i, 'priceIncludingGST']);
            }
            return total;
        };

    const lineItems = props.lineItems.map(
        (lineItem, index) =>
            <GstCalculatorLineItem key={index} index={index} lineItem={lineItem}
                    onSetPriceExcludingGST={props.onSetPriceExcludingGST}
                    onSetPriceIncludingGST={props.onSetPriceIncludingGST}
                    onAddLineItem={props.onAddLineItem}
                    onRemoveLineItem={props.onRemoveLineItem}
                    disableRemoveButton={props.lineItems.size <= 1} />
        );
    return (
        <>
            <h1 className={styles.Title}>GST Calculator</h1>
            <div className={styles.GstCalculator}>
                <div className={styles.Grid}>
                    <GstCalculatorHeader />
                    {lineItems}
                    <GstCalculatorFooter totalExcludingGST={totalExcludingGST()} totalGST={totalGST()} totalIncludingGST={totalIncludingGST()}/>
                </div>
            </div>
        </>
    );
    
}
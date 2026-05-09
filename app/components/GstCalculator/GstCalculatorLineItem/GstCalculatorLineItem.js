import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from './GstCalculatorLineItem.module.css';

var currencyFormatter = new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD' });

export default function GstCalculatorLineItem(props) {


    var handlePriceExcludingGSTChange = (event) => {
        props.onSetPriceExcludingGST(event.target.value, props.index);
    };

    var handlePriceIncludingGSTChange = (event) => {
        props.onSetPriceIncludingGST(event.target.value, props.index);
    }

    var handleAddLineItem = (event) => {
        props.onAddLineItem(props.index);
    }

    var handleRemoveLineItem = (event) => {
        props.onRemoveLineItem(props.index);
    }
    
    return (
        <>
            <div className={styles.PriceExcludingGST}>
                <input type="number" placeholder="excluding gst" step="0.01" name="priceExcludingGST" value={props.lineItem.get('priceExcludingGST')?.toFixed(2)}
                    onChange={handlePriceExcludingGSTChange}/>
            </div>
            <div className={styles.GST}>
                <p>{currencyFormatter.format(props.lineItem.get('GST')?.toFixed(2))}</p>
            </div>
            <div className={styles.PriceIncludingGST}>
                <input type="number" placeholder="including gst" step="0.01" name="priceIncludingGST" value={props.lineItem.get('priceIncludingGST')?.toFixed(2)}
                    onChange={handlePriceIncludingGSTChange}/>
            </div>
            <div className={styles.ButtonGroup}>
                <button type="button" onClick={handleRemoveLineItem} disabled={props.disableRemoveButton}>
                    &#8722;
                </button>
                <button type="button" onClick={handleAddLineItem}>
                    &#43;
                </button>
            </div>
        </>
    );
    
}
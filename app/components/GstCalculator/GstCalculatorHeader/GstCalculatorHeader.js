import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from './GstCalculatorHeader.module.css';

export default function GstCalculatorHeader() {
    return (
        <>
            <div className={styles.PriceExcludingGST}>
                <label>Price excl. GST</label>
            </div>
            <div className={styles.GST}>
                <label>GST</label>
            </div>
            <div className={styles.PriceIncludingGST}>
                <label>Price incl. GST</label>
            </div>
        </>
    );
}
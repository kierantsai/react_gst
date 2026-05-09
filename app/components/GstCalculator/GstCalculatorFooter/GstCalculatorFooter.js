import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from './GstCalculatorFooter.module.css';

var currencyFormatter = new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD' });

export default function GstCalculatorFooter({totalExcludingGST, totalGST, totalIncludingGST}) {
    return (
        <>
            <div className={styles.PriceExcludingGST}>
                <p className="form-control-static">{currencyFormatter.format(totalExcludingGST)}</p>
            </div>
            <div className={styles.GST}>
                <p className="form-control-static">{currencyFormatter.format(totalGST)}</p>
            </div>
            <div className={styles.PriceIncludingGST}>
                <p className="form-control-static">{currencyFormatter.format(totalIncludingGST)}</p>
            </div>
        </>
    );
}
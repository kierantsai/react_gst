import React from 'react';
import ReactDOM from 'react-dom';

var currencyFormatter = new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD' });

export default class GstCalculatorFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="form-group col-md-3 col-sm-4">
                    <label className="sr-only">Total excluding GST</label>
                    <p className="form-control-static">{currencyFormatter.format(this.props.totalExcludingGST)}</p>
                </div>
                <div className="form-group col-md-2 col-sm-2">
                    <label className="sr-only">GST</label>
                    <p className="form-control-static">{currencyFormatter.format(this.props.totalGST)}</p>
                </div>
                <div className="form-group col-md-3 col-sm-4">
                    <label className="sr-only">Total including GST</label>
                    <p className="form-control-static">{currencyFormatter.format(this.props.totalIncludingGST)}</p>
                </div>
            </div>
        );
    }
}
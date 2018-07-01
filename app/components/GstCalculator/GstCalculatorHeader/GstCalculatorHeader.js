import React from 'react';
import ReactDOM from 'react-dom';

export default class GstCalculatorHeader extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="form-group col-md-3 col-sm-4">
                    <label className="sr-only">Price excluding GST</label>
                    <p className="form-control-static">Price excl. GST</p>
                </div>
                <div className="form-group col-md-2 col-sm-2">
                    <label className="sr-only">GST</label>
                    <p className="form-control-static">GST</p>
                </div>
                <div className="form-group col-md-3 col-sm-3">
                    <label className="sr-only">Price including GST</label>
                    <p className="form-control-static">Price incl. GST</p>
                </div>
            </div>
        );
    }
}
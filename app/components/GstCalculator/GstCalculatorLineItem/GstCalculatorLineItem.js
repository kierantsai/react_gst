import React from 'react';
import ReactDOM from 'react-dom';

var currencyFormatter = new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD' });

export default class GstCalculatorLineItem extends React.Component {

    constructor(props) {
        super(props);
        this.handlePriceExcludingGSTChange = this.handlePriceExcludingGSTChange.bind(this);
        this.handlePriceIncludingGSTChange = this.handlePriceIncludingGSTChange.bind(this);
        this.handleAddLineItem = this.handleAddLineItem.bind(this);
        this.handleRemoveLineItem = this.handleRemoveLineItem.bind(this);
    }

    handlePriceExcludingGSTChange(event) {
        this.props.onSetPriceExcludingGST(event.target.value, this.props.index);
    }

    handlePriceIncludingGSTChange(event) {
        this.props.onSetPriceIncludingGST(event.target.value, this.props.index);
    }

    handleAddLineItem(event) {
        this.props.onAddLineItem(this.props.index);
    }

    handleRemoveLineItem(event) {
        this.props.onRemoveLineItem(this.props.index);
    }

    render() {
        return (
            <div className="row">
                <div className="form-group col-md-3 col-sm-4">
                    <label htmlFor="priceWithoutGST" className="sr-only">Price excluding GST</label>
                    <input type="number" className="form-control" placeholder="excluding gst" name="priceExcludingGST" value={this.props.lineItem.get('priceExcludingGST')}
                        onChange={this.handlePriceExcludingGSTChange}/>
                </div>
                <div className="form-group col-md-2 col-sm-2">
                    <label htmlFor="gst" className="sr-only">GST</label>
                    <p className="form-control-static">{currencyFormatter.format(this.props.lineItem.get('GST'))}</p>
                </div>
                <div className="form-group col-md-3 col-sm-4">
                    <label htmlFor="priceWithGST" className="sr-only">Price including GST</label>
                    <input type="number" className="form-control" placeholder="including gst" name="priceIncludingGST" value={this.props.lineItem.get('priceIncludingGST')}
                        onChange={this.handlePriceIncludingGSTChange}/>
                </div>
                <div className="col-md-3 col-sm-2">
                    <button type="button" className="form-control btn btn-default" onClick={this.handleRemoveLineItem} disabled={this.props.disableRemoveButton}>
                        <span className="glyphicon glyphicon-minus"></span>
                    </button>
                    <button type="button" className="form-control btn btn-default" onClick={this.handleAddLineItem}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </div>
            </div>
        );
    }
}
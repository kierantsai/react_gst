import React from 'react';
import ReactDOM from 'react-dom';
import GstCalculatorHeader from '../../components/GstCalculator/GstCalculatorHeader/GstCalculatorHeader';
import GstCalculatorFooter from '../../components/GstCalculator/GstCalculatorFooter/GstCalculatorFooter';
import GstCalculatorLineItem from '../../components/GstCalculator/GstCalculatorLineItem/GstCalculatorLineItem';

export default class GstCalculator extends React.Component {
    constructor(props) {
        super(props);
    }

    totalExcludingGST() {
            var total = 0.0;
            for(var i = 0; i < this.props.lineItems.size; i++){
                total = total + this.props.lineItems.getIn([i, 'priceExcludingGST']);
            }
            return total;
        };
    totalGST() {
            var total = 0.0;
            for(var i = 0; i < this.props.lineItems.size; i++){
                total = total + this.props.lineItems.getIn([i, 'GST']);
            }
            return total;
        };
    totalIncludingGST() {
            var total = 0.0;
            for(var i = 0; i < this.props.lineItems.size; i++){
                total = total + this.props.lineItems.getIn([i, 'priceIncludingGST']);
            }
            return total;
        };
    render() {
        const lineItems = this.props.lineItems.map(
            (lineItem, index) =>
                <GstCalculatorLineItem key={index} index={index} lineItem={lineItem}
                     onSetPriceExcludingGST={this.props.onSetPriceExcludingGST}
                     onSetPriceIncludingGST={this.props.onSetPriceIncludingGST}
                     onAddLineItem={this.props.onAddLineItem}
                     onRemoveLineItem={this.props.onRemoveLineItem}
                     disableRemoveButton={this.props.lineItems.size <= 1} />
            );
        return (
            <div className="col-md-12 form-inline">
                <GstCalculatorHeader />
                {lineItems}
                <GstCalculatorFooter totalExcludingGST={this.totalExcludingGST()} totalGST={this.totalGST()} totalIncludingGST={this.totalIncludingGST()}/>
            </div>
        );
    }
}
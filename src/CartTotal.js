import React from 'react';
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class CartTotal extends React.Component {
  render() {

    const total = Object.keys(this.props.options).reduce(
      (acc, curr) => acc + this.props.options[curr].cost,
      0
    );

    return (
      <div>
        <div className="summary__total">
        </div><h2 className="summary__total__label" >Total</h2>
        <div className="summary__total__value">{USCurrencyFormat.format(total)}</div>
      </div>
    )
  }
}
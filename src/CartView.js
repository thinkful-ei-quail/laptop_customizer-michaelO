import React from 'react';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class CartView extends React.Component{
  render(){
    const summary = Object.keys(this.props.options).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.options[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
    
    const total = Object.keys(this.props.options).reduce(
      (acc, curr) => acc + this.props.options[curr].cost,
      0
    );
    
    return <div><h2>Your cart</h2>{summary}<div className="summary__total">
    </div><h2 className="summary__total__label" >Total</h2>
    <div className="summary__total__value">{USCurrencyFormat.format(total)}</div>
    </div>
  }
}
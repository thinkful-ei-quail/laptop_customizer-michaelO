import React from 'react';
import CartSummary from './CartSummary';
import CartTotal from './CartTotal';


export default class CartView extends React.Component {
  render() {
    const summary = Object.keys(this.props.options).map((feature, idx) =>
      <CartSummary key={idx} feature={feature} options={this.props.options} />
    );

    const total = <CartTotal options={this.props.options} />

    return <div><h2>Your cart</h2>{summary}<div>{total}</div>
    </div>
  }
}
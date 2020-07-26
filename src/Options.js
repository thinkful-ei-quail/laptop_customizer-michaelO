import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class Options extends React.Component {
  render() {
    // const itemHash = slugify(JSON.stringify(item));
        return (
          <div key = {this.props.itemHash}
          className = "feature__item" >
            <input
              type="radio"
              id={this.props.itemHash}
              className="feature__option"
              name={this.props.feature}
              checked={this.props.item.name === this.state.selected[this.props.feature].name}
              onChange={e => this.updateFeature(this.props.feature, this.props.item)}
            />
            <label label htmlFor = {this.props.itemHash}
            className = "feature__label" >
              {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
            </label>
          </div>
        );}

}
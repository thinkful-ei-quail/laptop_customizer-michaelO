import React from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import TechSpecs from './TechSpecs';
import Option from './Option';

export default class CustomizeView extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) =>
    <TechSpecs feature={feature}
     features={this.props.features}
      key={idx}
      onChange={this.props.onChange}
      options={this.props.options} />);

    return (<div><h2>Customize your laptop:</h2>{features}</div>);
  }
}

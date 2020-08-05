import React from 'react';
import TechSpecs from './TechSpecs';


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

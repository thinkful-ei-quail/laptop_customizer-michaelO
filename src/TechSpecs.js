import React from 'react';
import slugify from 'slugify';
import Option from './Option';

export default class TechSpecs extends React.Component {
  render() {
     
      const featureHash = this.props.feature + '-' + this.props.key;
    const options = this.props.features[this.props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (<Option key={itemHash}
          item={item}
          itemHash={itemHash}
          feature={this.props.feature}
          options={this.props.options}
          onChange={this.props.onChange} />
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{this.props.feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
  }
}




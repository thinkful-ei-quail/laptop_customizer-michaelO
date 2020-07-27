import React from 'react';
import slugify from 'slugify';
import Options from './Options';

export default class CustomizeView extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => { 
        const itemHash = slugify(JSON.stringify(item));
        return (<Options key={itemHash}
          item={item}
          itemHash={itemHash}
          feature={feature}
          options={this.props.options}
          onChange={this.props.onChange} />
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    return (<div><h2>Customize your laptop:</h2>{features}</div>)
  }
}
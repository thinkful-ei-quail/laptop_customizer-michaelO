import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default function FeaturesTest(props) {
  
  const selected = Object.keys(props.items).map(item => item)
  
  const features = Object.keys(props.features).map(feature => {
    const cost = props.features[feature].map(feature => feature.cost)
    return <><span>{feature}</span> <div>{cost}</div></>
  });
  return <div> <span>{selected}</span><br /> <span>{features}</span> </div>
}
import React, { Component } from 'react';
import Header from './Header';
import Test from './Test';
import CustomizeView from './CustomizeView';
import CartView from './CartView';


import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {      
    return (
      <div className="App">
        <Header/>
        <main>
          <form className="main__form">
            <CustomizeView features={this.props.features}
             options={this.state.selected}
              onChange={this.updateFeature}/>            
          </form>
          <section className="main__summary">
            <CartView options={this.state.selected}/>            
          </section>
        </main>
      </div>
    );
  }
}

export default App;

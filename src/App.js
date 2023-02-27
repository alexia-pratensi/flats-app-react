import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';
import flats from './flats';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // flats: []
    }
  }

  flats = (props) => {
    return (
      props.flats.map(({name, imageUrl, price, priceCurrency}) => {
        return <Flat name={flats.name} imageUrl={imageUrl} price={price} priceCurrency={priceCurrency} />
      }
      )
    )
  }

  render () {
    return (
      <div className="App">
        <div className="left-scene">
          <Flat flats/>
        </div>
        <div className="right-scene">

        </div>
      </div>
    );

  }
}



export default App;

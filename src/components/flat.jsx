import React, { Component } from 'react'
import flats from '../flats'

export class Flat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFlat: flats
    }

  }
  // flats = (props) => {
  //   return (
  //     props.flats.map(({name, imageUrl, price, priceCurrency}) => {
  //       return <Flat name={name} imageUrl={imageUrl} price={price} priceCurrency={priceCurrency} />
  //     }
  //     )
  //   )
  // }
  render() {
    return (
      <div className="card">
        <img src={this.props.imageUrl}/>
        <div className="card-categogy">
          {this.props.flat.price}
          {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        {/* <a href={this.props.} className="card-link"> </a> */}
      </div>
      )
  }
}

export default Flat

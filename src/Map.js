import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import env from "react-dotenv";
import './Map.css'

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 39.968,
      long: -98.3
    },
    zoom: 5
  }

  render() {
    return (
      <div class="Map">
        <GoogleMapReact
          boostrapURLKeys={{key: env.MAPS_API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
        Center: {this.props.center.lat + ", " + this.props.center.long}
      </div>
    )
  }
}


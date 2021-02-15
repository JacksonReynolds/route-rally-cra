import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

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

        >

        </GoogleMapReact>
      </div>
    )
  }
}


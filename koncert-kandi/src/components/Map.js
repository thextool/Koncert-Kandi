import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

var greenIcon = L.icon({
    iconUrl: './assets/download.png',
    iconSize:     [25, 41], // size of the icon
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});
class MapConnections extends Component {

    state = {
        userPosition: {
            lat: 39.7392,
            lng: -104.9903,
            zoom: 4,
        }, 
        connection1: {
            lat: 40.7128,
            lng: -74.0060,
        },
        connection2: {
            lat: 34.0522,
            lng: -118.2437,
        }
    }

    render() {
        const userPosition = [this.state.userPosition.lat, this.state.userPosition.lng]
        const connection1 = [this.state.connection1.lat, this.state.connection1.lng]
        const connection2 = [this.state.connection2.lat, this.state.connection2.lng]
        return (
        <Map className='map-container' center={userPosition} zoom={this.state.userPosition.zoom}>
            <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
                position={userPosition}
                icon={greenIcon}>
            <Popup>
                Denver, CO <br /> Merica
            </Popup>
            </Marker>
            <Marker 
                position={connection1}
                icon={greenIcon}>
            <Popup>
                New York, NY <br /> Rainbow
            </Popup>
            </Marker>
            <Marker 
                position={connection2}
                icon={greenIcon}>
            <Popup>
                Los Angeles, CA <br /> Sir Biff
            </Popup>
            </Marker>
        </Map>
        )
    }

}

export default MapConnections
import React from 'react'
import {Marker, Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react'

export const MapContainer = (address, latLongs) => {
    
    //generate google map for the event modal
    return (
        <Map google={this.props.google} zoom={14} initialCenter={latLongs}> 
            <Marker onClick={this.onMarkerClick}
                    name={address}
                    position={latLongs}
                    className="eventMap"/>
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBuD0XXzn8b_eCvL0IEsGIu7lg8vDNJyp0")
  })(MapContainer)
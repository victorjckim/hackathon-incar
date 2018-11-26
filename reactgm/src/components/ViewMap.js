import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";

const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_W1Y1dVicg6ymwXynWJkKp22657YrTgM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `376px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 34.0403, lng: -118.2696 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 34.0403, lng: -118.2696 }}
        //onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

class ViewMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: true
    };
  }

  render() {
    return (
      <React.Fragment>
        <MapComponent isMarkerShown={this.state.isMarkerShown} />
        <input type="text" />
      </React.Fragment>
    );
  }
}

export default ViewMap;

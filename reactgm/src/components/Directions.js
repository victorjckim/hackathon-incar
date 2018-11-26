/*global google*/
import React from "react";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker
} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";

const MeterDirections = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD_W1Y1dVicg6ymwXynWJkKp22657YrTgM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `376px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new google.maps.LatLng(34.0403, -118.2696),
          destination: new google.maps.LatLng(34.0639, -118.3592),
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  })
)(props => (
  <GoogleMap defaultZoom={14} defaultCenter={{ lat: 34.0403, lng: -118.2696 }}>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

class Directions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: true
    };
  }

  render() {
    return (
      <React.Fragment>
        <MeterDirections isMarkerShown={this.state.isMarkerShown} />
        <Link to="/metermap">
          <button type="button">Start</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default Directions;

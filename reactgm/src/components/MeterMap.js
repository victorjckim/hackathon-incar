import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { compose, withProps, withStateHandlers } from "recompose";
import { Link } from "react-router-dom";

const meters = [
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.358871, 34.062583] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM735",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.358811, 34.062576] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM735A",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.358199, 34.062506] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM740",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.358962, 34.062593] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM734B",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.35902, 34.062599] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM734A",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.358658, 34.062558] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM735B",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.358141, 34.062501] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM741",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.358445, 34.062533] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM737",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.358343, 34.062523] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM738",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.35851, 34.062541] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM736",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.358287, 34.062517] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM739",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.358596, 34.062552] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM735C",
    timelimit: "2HR"
  },
  {
    blockface: "5900 WILSHIRE BL",
    latlng: { type: "Point", coordinates: [-118.359115, 34.06261] },
    metertype: "Single-Space",
    parkingpolicy:
      "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
    raterange: "$1.00",
    ratetype: "FLAT",
    spaceid: "MM734",
    timelimit: "2HR"
  }
];

const MapMeters = compose(
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      })
    }
  ),
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
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: 34.0639, lng: -118.3592 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 34.0639, lng: -118.3592 }} />
    )}
    {meters.map(meter => {
      return (
        <Marker
          position={{
            lat: meter.latlng.coordinates[1],
            lng: meter.latlng.coordinates[0]
          }}
          // onClick={SOME METHOD PLS}
          onClick={props.onToggleOpen}
        >
          {props.isOpen && (
            <InfoWindow onCloseClick={props.onToggleOpen}>Something</InfoWindow>
          )}
        </Marker>
      );
    })}
  </GoogleMap>
));

class MeterMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: true
    };
  }

  render() {
    return (
      <React.Fragment>
        <MapMeters isMarkerShown={this.state.isMarkerShown} />
        <Link to="/directions">
          <button type="button">Directions</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default MeterMap;

import React from "react";
import { Route, Link, withRouter } from "react-router-dom";
import SearchParking from "./SearchParking";
import MeterMap from "./MeterMap";
import Directions from "./Directions";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.history.push("/map");
  }

  render() {
    return (
      <React.Fragment>
        <Route path="/map" component={SearchParking} />
        <Route path="/metermap" component={MeterMap} />
        <Route path="/directions" component={Directions} />
      </React.Fragment>
    );
  }
}

export default withRouter(Router);

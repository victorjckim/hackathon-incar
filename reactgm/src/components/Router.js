import React from "react";
import { Route, Link } from "react-router-dom";
import SearchParking from "./SearchParking";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <SearchParking />
      </React.Fragment>
    );
  }
}

export default Router;

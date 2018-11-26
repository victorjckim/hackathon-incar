import React from "react";
import ViewMap from "./ViewMap";
import { Link } from "react-router-dom";

class SearchParking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <ViewMap />
        <button>Search</button>
      </React.Fragment>
    );
  }
}

export default SearchParking;

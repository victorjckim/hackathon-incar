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
        <Link to="/directions">
          <button type="button">Navigate</button>
        </Link>
      </React.Fragment>
    );
  }
}

export default SearchParking;

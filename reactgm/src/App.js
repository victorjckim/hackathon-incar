import React, { Component } from "react";
import styles from "./App.module.css";
import Router from "./components/Router";
import { Link } from "react-router-dom";

const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending..."
  };

  componentDidMount() {
    const vin = gm.info.getVIN();
    this.setState({ vin });
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    return (
      <React.Fragment>
        {/* // <div className={styles.root}>
      //   <h2>Build Test</h2>
      //   <div>VIN: {this.state.vin}</div> */}
        <Router />
        <button onClick={this.handleClose} className="float-right">
          Close
        </button>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default App;

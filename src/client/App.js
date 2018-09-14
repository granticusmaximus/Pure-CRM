import React, { Component } from "react";
import "../src/assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviRoute from "../src/components/NavBar/NavBar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NaviRoute />
        
        <div className="footer">All Rights Reserved</div>
      </div>
    );
  }
}

export default App;
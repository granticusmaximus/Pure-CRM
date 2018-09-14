import React, { Component } from "react";
import "../../../assets/css/App.css";
import { Alert } from "reactstrap";

class AboutPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <Alert color="primary">Please be patient as Grant Watson adds more components</Alert>
        <h2>About Page</h2>
        <p>I am adding more to this tool, right now, it is in the works to be a CRM Tool</p>
        </div>
      </div>
    );
  }
}

export default AboutPage;

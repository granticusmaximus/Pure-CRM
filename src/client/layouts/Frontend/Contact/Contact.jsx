import "../../../assets/css/App.css";
import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import { Button, Label, Input } from "reactstrap";

class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      phone: "",
      message: ""
    };
  }

  validateForm() {
    return (
      this.state.fullName.length > 0 &&
      this.state.email.length > 0 &&
      this.state.phone.length > 0 &&
      this.state.message.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div className="loginBox">
          <center>
            <div className="loginHeader">Contact Form</div>
          </center>
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="fullName" bsSize="large">
                <Label>Full Name</Label>
                <FormControl
                  autoFocus
                  type="fullName"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="email" bsSize="large">
                <Label>Email</Label>
                <FormControl
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <Label>Telephone Number</Label>
                <FormControl
                  value={this.state.phone}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="aboutYouText">Leave a Message</Label>
                <Input
                  type="textarea"
                  value={this.state.message}
                  name="text"
                  onChange={this.handleChange}
                  id="aboutYouText"
                />
              </FormGroup>
              <Button
                color="warning"
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;

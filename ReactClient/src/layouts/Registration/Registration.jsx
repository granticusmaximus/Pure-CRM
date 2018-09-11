import "../../assets/css/App.css";
import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import { Button, Label } from "reactstrap";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.passwordConfirm.length > 0
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
            <div className="loginHeader">Log Into Your CRM</div>
          </center>
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="firstName" bsSize="large">
                <Label>First Name</Label>
                <FormControl
                  autoFocus
                  type="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="lastName" bsSize="large">
                <Label>Last Name</Label>
                <FormControl
                  type="lastName"
                  value={this.state.lastName}
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
                <Label>Password</Label>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <FormGroup controlId="passwordConfirm" bsSize="large">
                <Label>Confirm Password</Label>
                <FormControl
                  value={this.state.passwordConfirm}
                  onChange={this.handleChange}
                  type="password"
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

export default Registration;

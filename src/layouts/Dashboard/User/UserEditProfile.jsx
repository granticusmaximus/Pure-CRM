import React from "react";
import "../../../assets/css/App.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from "reactstrap";
import { Link, Route, Switch } from "react-router-dom";

const EditProfile = () => (
  <div className="container">
    <Alert color="primary">
      Please be patient as Grant Watson adds more components
    </Alert>
    <h1>Edit User Profile</h1>
    <div class="user three" />
    <h3>Grant Watson</h3>
    <h4>There is no place like home!</h4>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="update email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="update password"
        />
      </FormGroup>
      <FormGroup>
        <Label for="aboutYouText">About You!</Label>
        <Input type="textarea" name="text" id="aboutYouText" />
      </FormGroup>
      <FormGroup>
        <Label for="education">Education</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="update your education"
        />
      </FormGroup>
    </Form>
    <Button color="warning">
        <Link to={"/user/profile"} className="nav-link">
          Save Changes
        </Link>
    </Button>
    <Switch>
      <Route path="/user/profile" component={EditProfile} />
    </Switch>
  </div>
);

export default EditProfile;

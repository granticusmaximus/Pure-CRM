import React from "react";
import "../../../assets/css/App.css";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

const Messages = () => (
  <div className="container">
    <Alert color="primary">
      Please be patient as Grant Watson adds more components
    </Alert>
    <h1>User Messages</h1>
    <Form>
      <FormGroup>
        <Input
          type="text"
          name="name"
          id="fullName"
          placeholder="Enter the name of the user you want to send a message"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Enter subject of your message"
        />
      </FormGroup>
      <FormGroup>
        <Label for="messageText">Enter your message</Label>
        <Input type="textarea" name="text" id="messageText" />
      </FormGroup>
    </Form>
    <Button>Send Message</Button>
  </div>
);

export default Messages;

import React from "react";
import "../../../assets/css/App.css";
import { Alert, Col, Row, Button } from "reactstrap";

const Friends = () => (
  <div className="container">
    <Alert color="primary">
      Please be patient as Grant Watson adds more components
    </Alert>
    <h1>User Friends</h1>
    <hr />
    <Row>
      <Col>
        <div className="miniCard">
          <div class="user one" />
          <div className="headerUser">Grant Watson</div>
          <hr />
          <Button color="warning">Message</Button>
        </div>
      </Col>
      <Col>
        <div className="miniCard">
          <div class="user one" />
          <div className="headerUser">Teddy Keith</div>
          <hr />
          <Button color="warning">Message</Button>
        </div>
      </Col>
      <Col>
        <div className="miniCard">
          <div class="user one" />
          <div className="headerUser">Jason Adams</div>
          <hr />
          <Button color="warning">Message</Button>
        </div>
      </Col>
    </Row>

    <hr />

    <Row>
      <Col>
        <div className="miniCard">
          <div class="user one" />
          <div className="headerUser">Ray Osbourne</div>
          <hr />
          <Button color="warning">Message</Button>
        </div>
      </Col>
      <Col>
        <div className="miniCard">
          <div class="user one" />
          <div className="headerUser">Ray van Brutt</div>
          <hr />
          <Button color="warning">Message</Button>
        </div>
      </Col>
      <Col>
        <div className="miniCard">
          <div class="user one" />
          <div className="headerUser">Jerry Harrison</div>
          <hr />
          <Button color="warning">Message</Button>
        </div>
      </Col>
    </Row>
  </div>
);

export default Friends;

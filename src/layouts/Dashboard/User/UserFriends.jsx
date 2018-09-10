import React from "react";
import "../../../assets/css/App.css";
import { Alert } from "reactstrap";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const Friends = () => (
  <div className="container">
    <Alert color="primary">
      Please be patient as Grant Watson adds more components
    </Alert>
    <h1>User Friends</h1>
    <GridContainer>
      <GridItem>
        <div class="user one" />
        <div className="headerUser">Grant Watson</div>
      </GridItem>
      <GridItem>
        <div class="user one" />
        <div className="headerUser">Frank Wallaby</div>
      </GridItem>
      <GridItem>
        <div class="user one" />
        <div className="headerUser">Eddy Bourdain</div>
      </GridItem>
    </GridContainer>
  </div>
);

export default Friends;

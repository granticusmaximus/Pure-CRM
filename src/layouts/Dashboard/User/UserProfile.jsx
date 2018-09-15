import React, { Component } from "react";
import "../../../assets/css/App.css";
import {
  Alert,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import { Link, Route, Switch } from "react-router-dom";
import EditProfile from "./UserEditProfile";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="container">
        <Alert color="primary">
          Please be patient as Grant Watson adds more components
        </Alert>
        <h1>User Profile</h1>
        <p>More info coming soon</p>

        <div class="user one" />
        <h3>Grant Watson</h3>
        <h4>There is no place like home!</h4>
        <hr />

        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Contact Information
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              About Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Education
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <br />
            <br />
            <Row>
              <Col sm="6">
                <div className="headerUser">Email</div>
                <p>email@email.com</p>
              </Col>
              <Col sm="6">
                <div className="headerUser">Contact Phone</div>
                <p>555-5555</p>
              </Col>
              <Col sm="12">
                <div className="headerUser">Something for Contact</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus cursus vel libero non auctor. Suspendisse diam mi,
                  luctus placerat libero id, bibendum venenatis risus. Integer
                  sodales vulputate orci eget efficitur. Quisque rhoncus ipsum
                  ex, ut pretium dolor fringilla rhoncus. Mauris viverra, tellus
                  vel tincidunt cursus, mauris elit blandit arcu, vitae
                  consequat neque tellus eu dui. Quisque eleifend, erat id
                  faucibus commodo, mi risus aliquam enim, vitae ornare tortor
                  justo quis leo. Nulla ultrices nisi sit amet tellus volutpat
                  feugiat. Phasellus viverra mollis orci vel finibus. Sed
                  consequat nibh nec dui fermentum, et rutrum tellus venenatis.
                  Etiam at augue a magna fermentum varius quis non magna. Mauris
                  sagittis mollis diam. Curabitur aliquam sapien et velit
                  lacinia sodales. Mauris feugiat non dolor at convallis.
                </p>
                <p>
                  Nunc gravida erat in lorem porta, sit amet pharetra magna
                  semper. Nunc dignissim iaculis malesuada. Aliquam malesuada,
                  neque sit amet varius facilisis, ex nulla consectetur velit,
                  eget consectetur enim tortor eget enim. Mauris sagittis enim a
                  neque gravida, nec interdum odio accumsan. Quisque metus sem,
                  laoreet ut tristique vitae, feugiat a odio. Vestibulum luctus
                  id est sollicitudin tempus. Praesent felis enim, commodo quis
                  fermentum sit amet, placerat vitae erat. Integer efficitur
                  eget leo pellentesque sollicitudin. Aenean vestibulum arcu
                  vitae lectus aliquet tristique. Vivamus elit enim, porta
                  interdum consequat non, bibendum sit amet urna. Nunc sodales
                  egestas ligula quis lobortis. In ut efficitur turpis. Praesent
                  ultrices, ipsum in pretium dignissim, nisi risus porta mauris,
                  nec finibus velit lectus sed nunc.
                </p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <br />
            <br />
            <Row>
              <Col sm="12">
                <div className="headerUser">About Me</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus cursus vel libero non auctor. Suspendisse diam mi,
                  luctus placerat libero id, bibendum venenatis risus. Integer
                  sodales vulputate orci eget efficitur. Quisque rhoncus ipsum
                  ex, ut pretium dolor fringilla rhoncus. Mauris viverra, tellus
                  vel tincidunt cursus, mauris elit blandit arcu, vitae
                  consequat neque tellus eu dui. Quisque eleifend, erat id
                  faucibus commodo, mi risus aliquam enim, vitae ornare tortor
                  justo quis leo. Nulla ultrices nisi sit amet tellus volutpat
                  feugiat. Phasellus viverra mollis orci vel finibus. Sed
                  consequat nibh nec dui fermentum, et rutrum tellus venenatis.
                  Etiam at augue a magna fermentum varius quis non magna. Mauris
                  sagittis mollis diam. Curabitur aliquam sapien et velit
                  lacinia sodales. Mauris feugiat non dolor at convallis.
                </p>
                <p>
                  Nunc gravida erat in lorem porta, sit amet pharetra magna
                  semper. Nunc dignissim iaculis malesuada. Aliquam malesuada,
                  neque sit amet varius facilisis, ex nulla consectetur velit,
                  eget consectetur enim tortor eget enim. Mauris sagittis enim a
                  neque gravida, nec interdum odio accumsan. Quisque metus sem,
                  laoreet ut tristique vitae, feugiat a odio. Vestibulum luctus
                  id est sollicitudin tempus. Praesent felis enim, commodo quis
                  fermentum sit amet, placerat vitae erat. Integer efficitur
                  eget leo pellentesque sollicitudin. Aenean vestibulum arcu
                  vitae lectus aliquet tristique. Vivamus elit enim, porta
                  interdum consequat non, bibendum sit amet urna. Nunc sodales
                  egestas ligula quis lobortis. In ut efficitur turpis. Praesent
                  ultrices, ipsum in pretium dignissim, nisi risus porta mauris,
                  nec finibus velit lectus sed nunc.
                </p>
              </Col>
              <Col sm="12">
                <Card body>
                <div className="headerUser">Special Treatment</div>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <br />
            <br />
            <Row>
              <Col sm="6">
                <div className="headerUser">University</div>
                <p>Middle Georgia State University</p>
              </Col>
              <Col sm="6">
                <div className="headerUser">Certifications</div>
                <p>CompTIA Security+</p>
              </Col>
              <Col sm="12">
              <div className="headerUser">Something Educational</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus cursus vel libero non auctor. Suspendisse diam mi,
                  luctus placerat libero id, bibendum venenatis risus. Integer
                  sodales vulputate orci eget efficitur. Quisque rhoncus ipsum
                  ex, ut pretium dolor fringilla rhoncus. Mauris viverra, tellus
                  vel tincidunt cursus, mauris elit blandit arcu, vitae
                  consequat neque tellus eu dui. Quisque eleifend, erat id
                  faucibus commodo, mi risus aliquam enim, vitae ornare tortor
                  justo quis leo. Nulla ultrices nisi sit amet tellus volutpat
                  feugiat. Phasellus viverra mollis orci vel finibus. Sed
                  consequat nibh nec dui fermentum, et rutrum tellus venenatis.
                  Etiam at augue a magna fermentum varius quis non magna. Mauris
                  sagittis mollis diam. Curabitur aliquam sapien et velit
                  lacinia sodales. Mauris feugiat non dolor at convallis.
                </p>
                <p>
                  Nunc gravida erat in lorem porta, sit amet pharetra magna
                  semper. Nunc dignissim iaculis malesuada. Aliquam malesuada,
                  neque sit amet varius facilisis, ex nulla consectetur velit,
                  eget consectetur enim tortor eget enim. Mauris sagittis enim a
                  neque gravida, nec interdum odio accumsan. Quisque metus sem,
                  laoreet ut tristique vitae, feugiat a odio. Vestibulum luctus
                  id est sollicitudin tempus. Praesent felis enim, commodo quis
                  fermentum sit amet, placerat vitae erat. Integer efficitur
                  eget leo pellentesque sollicitudin. Aenean vestibulum arcu
                  vitae lectus aliquet tristique. Vivamus elit enim, porta
                  interdum consequat non, bibendum sit amet urna. Nunc sodales
                  egestas ligula quis lobortis. In ut efficitur turpis. Praesent
                  ultrices, ipsum in pretium dignissim, nisi risus porta mauris,
                  nec finibus velit lectus sed nunc.
                </p>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        <hr />
        <Button color="warning">
          <Link to={"/user/edit"} className="nav-link">
            Edit Profile
          </Link>
        </Button>
        <Switch>
          <Route path="/user/edit" component={EditProfile} />
        </Switch>
      </div>
    );
  }
}

export default Profile;

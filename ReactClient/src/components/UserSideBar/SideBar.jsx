import "../../assets/css/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Profile from "../../layouts/Dashboard/User/UserProfile";
import Messages from "../../layouts/Dashboard/User/UserMessage";
import Friends from "../../layouts/Dashboard/User/UserFriends";
import EditProfile from "../../layouts/Dashboard/User/UserEditProfile";


const SideBar = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div className="sideBar">
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <div className="header">Menu</div>
          <li>
            <Link to={"/user/profile"} className="nav-link">
              User Profile
            </Link>
          </li>
          <li>
            <Link to={"/user/messages"} className="nav-link">
              Messages
            </Link>
          </li>
          <li>
            <Link to={"/user/friends"} className="nav-link">
              Friend
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/user/profile" component={Profile} />
        <Route exact path="/user/edit" component={EditProfile} />
        <Route exact path="/user/messages" component={Messages} />
        <Route exact path="/user/friends" component={Friends} />
      </Switch>
    </div>
  </Router>
);

export default SideBar;

import React, { Component } from "react";
import "../src/assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviRoute from "./components/NavBar/NavBar";
import { UserModelState, UserModelStateVMInitial } from './models/userModel';
import { actionCreator } from './components/actionHelper';


export interface AppState {
  userState: UserModelState;
}

export const appStateInitial: AppState = {
  userState: UserModelStateVMInitial,
};
export interface LoginPayload {
  user: UserModelState;
  users: UserModelState[];
}

export const APP_USER_LOGIN_ACTION = actionCreator<LoginPayload>('APP_USER_LOGIN_ACTION');
export const APP_USER_LOGOUT_ACTION = actionCreator<void>('APP_USER_LOGOUT_ACTION');

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
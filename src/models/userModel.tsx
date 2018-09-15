import { Action, isType } from "../components/actionHelper";



export interface UserModelState {
  uid: number;
  fname: string;
  lname: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
  createdat?: any;
  updatedat?: any;
}

export interface UserModelStateVM {
  uid: number;
  fname: string;
  lname: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
  createdat?: any;
  updatedat?: any;
}

export const UserModelStateVMInitial: UserModelStateVM = {
  uid: 0,
  fname: "",
  lname: "",
  email: "",
  isActive: true,
  isAdmin: false,
  createdat: "",
  updatedat: ""
};

export const userReducer = (
  currentState: UserModelState,
  action: Action<any>
): UserModelState => {
  if (isType(action, APP_USER_LOGOUT_ACTION)) {
    return {
      uid: 0,
      fname: "",
      lname: "",
      email: "",
      isActive: false,
      isAdmin: false,
      createdat: "",
      updatedat: ""
    };
  } else if (isType(action, APP_USER_LOGIN_ACTION)) {
    currentState.userID = action.payload.user.userID;
    currentState.firstName = action.payload.user.firstName;
    currentState.lastName = action.payload.user.lastName;
    currentState.isActive = action.payload.user.isActive;
    currentState.edipi = action.payload.user.edipi;
    currentState.isAdmin = action.payload.user.isAdmin;
    return currentState;
  } else {
    return currentState;
  }
};

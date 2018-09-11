import { Action, isType } from '../components/actionHelper';

export interface UserState {
    userID: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    isActive: boolean;
    isAdmin: boolean;
}

export const userStateInitial: UserState = {
    userID: 0,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    isActive: false,
    isAdmin: false
};

export const userReducer = (currentState: UserState, action: Action<any>): UserState => {

    if (isType(action, APP_USER_LOGOUT_ACTION)) {
        return {
            userID: 0,
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            isActive: false,
            isAdmin: false
        };
    }
    else if (isType(action, APP_USER_LOGIN_ACTION)) {
        currentState.userID = action.payload.user.userID;
        currentState.email = action.payload.user.email;
        currentState.firstName = action.payload.user.firstName;
        currentState.lastName = action.payload.user.lastName;
        currentState.isActive = action.payload.user.isActive;
        currentState.password = action.payload.user.password;
        currentState.isAdmin = action.payload.user.isAdmin;
        return currentState;
    }
    else {
        return currentState;
    }
};
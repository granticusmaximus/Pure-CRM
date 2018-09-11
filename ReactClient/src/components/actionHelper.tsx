import 'core-js';

export interface Action<T> {
    type: string;
    payload: T;
}

interface ActionCreator<P> {
    type: string;
    (payload: P): Action<P>;
}

export function actionCreator<P>(type: string): ActionCreator<P> {
    return Object.assign(
        (payload: P): any => ({ type, payload }),
        { type }
    );
}

export function isType<P>(action: Action<any>,
    actionCreator: ActionCreator<P>): action is Action<P> {
    return action.type === actionCreator.type;
}
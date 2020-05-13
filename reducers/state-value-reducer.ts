import { Reducer } from 'react';
import type { State } from '../types/state';
import type { Action } from '../types/action';
import { ActionType } from '../constants/action-type';
import { none } from 'ts-option';

export const initialState: State = {
  user: none,
};

export const stateValueReducer: Reducer<State, Action> = (state = initialState, action) => {
    const handler = handlers.get(action.type);
    if (handler) {
        return handler.apply({}, [state, action]);
    }

    return state;
};


const reducerCaseSignup: Reducer<State, Action> = (state, action) => {
    return state;
}

const reducerCaseSignout: Reducer<State, Action> = (state, action) => {
    return state;
}

const handlers = new Map([
   [ActionType.Signup, reducerCaseSignup],
   [ActionType.Signout, reducerCaseSignout],
]);

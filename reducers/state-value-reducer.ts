import { Reducer } from 'react';
import type { State, Handlers } from '../types/state';
import type { Action, Payload } from '../types/action';
import { ActionType } from '../constants/action-type';
import booksReducer, { initialBooks } from './books-reducer';

export const initialState: State = {
    books: initialBooks,
};

export const stateValueReducer: Reducer<State, Action> = (
    state = initialState,
    action
) => {
    const handlers = middlewares.get(action.type);
    if (handlers) {
        const [requestHandler, responseHandler] = handlers;
        const payload = requestHandler(state, action);
       
        return responseHandler(
            state,
            action,
            payload,
        );
    }

    return state;
};

const middlewares = new Map<ActionType, Handlers<Action, Payload>>([
    booksReducer,
]);

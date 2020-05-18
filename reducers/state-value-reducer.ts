import { Reducer } from 'react';
import type { State, Action } from '../types/state';
import { ActionType } from '../constants/action-type';
import { initialBooks, searchReducer } from './books-reducer';

export const initialState: State = {
    books: initialBooks,
};

export const stateValueReducer: Reducer<State, Action> = (
    state = initialState,
    action,
) => {

    switch (action.type) {
        case ActionType.Search:
            return searchReducer(state, action);
        default:
            return state;
    }
};

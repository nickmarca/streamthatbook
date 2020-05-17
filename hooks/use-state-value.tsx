import React, { createContext, useContext, useReducer } from 'react';
import { stateValueReducer, initialState } from '../reducers/state-value-reducer';
import { Action } from 'types/action';
import { State } from 'types/state';

const initialContext: [State, (a: Action) => void ] = [initialState, (_: Action) => {}];
export const StateContext = createContext(initialContext);

export const StateProvider: React.FC = ({
    children,
}) => {
    const contextValue = useReducer(stateValueReducer, initialState);

    return (
        <StateContext.Provider value={contextValue}>
            {children}
        </StateContext.Provider>
    );
};

export default () => useContext(StateContext);

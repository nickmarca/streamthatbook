import React, { createContext, useContext, useReducer } from 'react';
import { stateValueReducer, initialState } from '../reducers/state-value-reducer';
import { Action } from 'types/action';

export const StateContext = createContext([initialState, (_: Action) => {}]);

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

export const useStateValue = () => useContext(StateContext);

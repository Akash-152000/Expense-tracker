'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';

type State = {
    name: string;
    currency: string;
};

type Action =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_CURRENCY'; payload: string };

const initialState: State = {
    name: '',
    currency: 'USD',
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_CURRENCY':
            return { ...state, currency: action.payload };
        default:
            return state;
    }
}

const UserContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export function UserProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);

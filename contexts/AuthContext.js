import React, { createContext, useReducer } from 'react';
import { authReducer } from '../reducers/AuthReducer';


export const AuthContext = createContext();

export default function AuthContextProvider(props) {
    const [authData, dispatch] = useReducer(authReducer, {
        isAuth: false,
        user: null
    });

    return (
        <AuthContext.Provider value={{authData, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    );
}
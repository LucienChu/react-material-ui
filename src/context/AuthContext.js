import React, { useState, createContext } from 'react';

export const AuthContext = createContext();
export const AuthProvider = props => {
    const [loginStatus, setLoginStatus] = useState(true);
    const [counter, setCounter] = useState(-1)

    return (
        <AuthContext.Provider value={{ loginStatus, setLoginStatus, counter, setCounter }}>
            {props.children}
        </AuthContext.Provider>
    )
}
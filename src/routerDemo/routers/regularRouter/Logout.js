import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Redirect } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';


export const Logout = props => {
    const { user, setUser } = useContext(AppContext).userPageContext;
    return (
        <div>
            {user !== null ?
                <div>
                    <h1>Logged IN</h1>
                    <button onClick={() => setUser(null)}>Toggle Log status</button>
                </div>
                :
                <Redirect to="/" />
            }
        </div>

    )
}
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink, BrowserRouter } from "react-router-dom";
import { LandingPage } from './LandingPage';
import { AppLayout } from './AppLayout';
import { ProtectedRoute } from './ProtectedRoute';


export const PrivateRouter = () => {
    const handleClick = () => {
        console.log("Handling click")
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <ProtectedRoute exact path="/app" handleClick={handleClick} component={AppLayout} />
            </Switch>
        </BrowserRouter>
    )
}
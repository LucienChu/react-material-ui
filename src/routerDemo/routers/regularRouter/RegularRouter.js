import React from 'react';
import "../../../App.css"
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Logout } from './Logout';
import { AppContextProvider } from '../../../context/AppContext';


function RegularRouter() {
    return (
        <AppContextProvider>
            <Router>
                <div className="App">
                    <nav>
                        <ul style={{ display: "flex", listStyle: "none", justifyContent: "space-around" }}>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/logout">Logout</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/logout" exact component={Logout} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </AppContextProvider>
    );
}

export default RegularRouter;

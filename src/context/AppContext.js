import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppContextProvider = props => {
    const [homeCounter, setHomeCounter] = useState(0);
    const [movies, setMovies] = useState([
        { name: "Harry Porter", price: "$10", id: 23124 },
        { name: "Game of Thrones", price: "$10", id: 2566124 },
        { name: "Inception", price: "$10", id: 23524 },
    ]);

    const [user, setUser] = useState(null);

    const contextValue = {
        homePageContext: { homeCounter, setHomeCounter },
        moviePageContext: { movies, setMovies },
        userPageContext: { user, setUser }
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}
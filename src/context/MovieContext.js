import React, { createContext, useState } from 'react';

export const MoviesContex = createContext();

export const MoviesProvider = props => {
    const [movies, setMovies] = useState([
        { name: "Harry Porter", price: "$10", id: 23124 },
        { name: "Game of Thrones", price: "$10", id: 2566124 },
        { name: "Inception", price: "$10", id: 23524 },
    ]);

    const [counter, setCounter] = useState(0)

    return (
        <MoviesContex.Provider value={{ movies, setMovies, counter, setCounter }}>
            {props.children}
        </MoviesContex.Provider>
    )
}
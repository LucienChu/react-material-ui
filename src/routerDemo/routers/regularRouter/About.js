import React, { useState, useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

export const About = props => {
    const { movies } = useContext(AppContext).moviePageContext;
    return (
        <div>
            <h1>About</h1>
            {movies.map(movie => {
                return <h2 key={movie.id}>{movie.name}</h2>
            })}
        </div>

    )
}
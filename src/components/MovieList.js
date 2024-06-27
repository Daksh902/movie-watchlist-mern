import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../actions/movieAction';
import MovieItem from './MovieItem';

const MovieList = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div className="movie-list">
            <h2>Movie Watchlist</h2>
            <ul>
                {movies.map((movie) => (
                    <MovieItem key={movie._id} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default MovieList;

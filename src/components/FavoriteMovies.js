import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';

const FavoriteMovies = () => {
    const favoriteMovies = useSelector((state) => state.movies.filter(movie => movie.favorite));

    return (
        <div className="favorites">
            <h2>Favorite Movies</h2>
            <ul>
                {favoriteMovies.map((movie) => (
                    <MovieItem key={movie._id} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default FavoriteMovies;

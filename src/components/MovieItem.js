import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleFavorite } from '../actions/movieAction';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
    const dispatch = useDispatch();

    return (
        <li className="movie-item">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Rated:</strong> {movie.rated}</p>
            <p><strong>Released:</strong> {movie.released}</p>
            <p><strong>Runtime:</strong> {movie.runtime}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
            <button onClick={() => dispatch(toggleFavorite(movie._id))}>
                {movie.favorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <button onClick={() => dispatch(deleteMovie(movie._id))}>Delete</button>
            <Link to={`/edit/${movie._id}`}>Edit</Link>
        </li>
    );
};

export default MovieItem;

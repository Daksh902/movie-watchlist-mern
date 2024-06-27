import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie, updateMovie } from '../actions/movieAction';
import { useParams, useNavigate } from 'react-router-dom';

const EditMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movies.find((movie) => movie._id === id));

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [rated, setRated] = useState('');
    const [released, setReleased] = useState('');
    const [runtime, setRuntime] = useState('');
    const [genre, setGenre] = useState('');
    const [imdbRating, setImdbRating] = useState('');
    const [poster, setPoster] = useState('');

    useEffect(() => {
        if (!movie) {
            dispatch(getMovie(id));
        } else {
            setTitle(movie.Title);
            setYear(movie.Year);
            setRated(movie.Rated);
            setReleased(movie.Released);
            setRuntime(movie.Runtime);
            setGenre(movie.Genre);
            setImdbRating(movie.imdbRating);
            setPoster(movie.Poster);
        }
    }, [dispatch, id, movie]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateMovie(id, { title, year, rated, released, runtime, genre, imdbRating, poster }));
        navigate('/');
    };

    return (
        <div className="add-edit-movie">
            <h2>Edit Movie</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Year</label>
                    <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
                </div>
                <div>
                    <label>Rated</label>
                    <input type="text" value={rated} onChange={(e) => setRated(e.target.value)} />
                </div>
                <div>
                    <label>Released</label>
                    <input type="text" value={released} onChange={(e) => setReleased(e.target.value)} />
                </div>
                <div>
                    <label>Runtime</label>
                    <input type="text" value={runtime} onChange={(e) => setRuntime(e.target.value)} />
                </div>
                <div>
                    <label>Genre</label>
                    <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
                </div>
                <div>
                    <label>IMDb Rating</label>
                    <input type="text" value={imdbRating} onChange={(e) => setImdbRating(e.target.value)} />
                </div>
                <div>
                    <label>Poster URL</label>
                    <input type="text" value={poster} onChange={(e) => setPoster(e.target.value)} />
                </div>
                <button type="submit">Update Movie</button>
            </form>
        </div>
    );
};

export default EditMovie;

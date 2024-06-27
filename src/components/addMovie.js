import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../actions/movieAction';

const AddMovie = () => {
    const [formData, setFormData] = useState({
        title: '',
        year: '',
        rated: '',
        released: '',
        runtime: '',
        genre: '',
        imdbRating: '',
        poster: ''
    });

    const { title, year, rated, released, runtime, genre, imdbRating, poster } = formData;

    const dispatch = useDispatch();

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMovie(formData));
        setFormData({
            title: '',
            year: '',
            rated: '',
            released: '',
            runtime: '',
            genre: '',
            imdbRating: '',
            poster: ''
        });
    };

    return (
        <div className="add-movie">
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input type="number" name="year" value={year} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Rated</label>
                    <input type="text" name="rated" value={rated} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Released</label>
                    <input type="date" name="released" value={released} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Runtime</label>
                    <input type="text" name="runtime" value={runtime} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input type="text" name="genre" value={genre} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>IMDb Rating</label>
                    <input type="number" step="0.1" name="imdbRating" value={imdbRating} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label>Poster URL</label>
                    <input type="url" name="poster" value={poster} onChange={onChange} required />
                </div>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default AddMovie;

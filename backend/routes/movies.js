const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// @route   GET /api/movies
// @desc    Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/movies
// @desc    Add a new movie
router.post('/', async (req, res) => {
    const { Title, Year, Rated, Released, Runtime, Genre, imdbRating, Poster } = req.body;
    try {
        const newMovie = new Movie({
            Title, Year, Rated, Released, Runtime, Genre, imdbRating, Poster
        });
        const movie = await newMovie.save();
        res.json(movie);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   GET /api/movies/:id
// @desc    Get movie by ID
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ msg: 'Movie not found' });
        }
        res.json(movie);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   PATCH /api/movies/:id
// @desc    Update a movie
router.patch('/:id', async (req, res) => {
    const { Title, Year, Rated, Released, Runtime, Genre, imdbRating, Poster } = req.body;
    try {
        let movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ msg: 'Movie not found' });
        }
        movie = await Movie.findByIdAndUpdate(req.params.id, {
            Title, Year, Rated, Released, Runtime, Genre, imdbRating, Poster
        }, { new: true });
        res.json(movie);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   DELETE /api/movies/:id
// @desc    Delete a movie
router.delete('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ msg: 'Movie not found' });
        }
        await movie.remove();
        res.json({ msg: 'Movie removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   GET /api/movies/search/:query
// @desc    Search movies by title
router.get('/search/:query', async (req, res) => {
    try {
        const movies = await Movie.find({ Title: new RegExp(req.params.query, 'i') });
        res.json(movies);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;

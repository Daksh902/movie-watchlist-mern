const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Year: { type: String, required: true },
    Rated: { type: String, required: true },
    Released: { type: String, required: true },
    Runtime: { type: String, required: true },
    Genre: { type: String, required: true },
    imdbRating: { type: String, required: true },
    Poster: { type: String, required: true }
});

module.exports = mongoose.model('Movie', MovieSchema);

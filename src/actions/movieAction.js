import axios from 'axios';

export const fetchMovies = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/movies');
        dispatch({ type: 'FETCH_MOVIES', payload: response.data });
    } catch (error) {
        console.error('Error fetching movies', error);
    }
};

export const addMovie = (movie) => async (dispatch) => {
    try {
        const response = await axios.post('/api/movies', movie);
        dispatch({ type: 'ADD_MOVIE', payload: response.data });
    } catch (error) {
        console.error('Error adding movie', error);
    }
};

export const getMovie = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`/api/movies/${id}`);
        dispatch({ type: 'GET_MOVIE', payload: response.data });
    } catch (error) {
        console.error('Error getting movie', error);
    }
};

export const updateMovie = (id, updates) => async (dispatch) => {
    try {
        const response = await axios.patch(`/api/movies/${id}`, updates);
        dispatch({ type: 'UPDATE_MOVIE', payload: response.data });
    } catch (error) {
        console.error('Error updating movie', error);
    }
};

export const deleteMovie = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/movies/${id}`);
        dispatch({ type: 'DELETE_MOVIE', payload: id });
    } catch (error) {
        console.error('Error deleting movie', error);
    }
};

export const toggleWatched = (id) => async (dispatch) => {
    try {
        const response = await axios.patch(`/api/movies/${id}`, { watched: true });
        dispatch({ type: 'TOGGLE_WATCHED', payload: response.data });
    } catch (error) {
        console.error('Error toggling watched status', error);
    }
};

export const toggleFavorite = (id) => async (dispatch) => {
    try {
        const response = await axios.patch(`/api/movies/${id}`, { favorite: true });
        dispatch({ type: 'TOGGLE_FAVORITE', payload: response.data });
    } catch (error) {
        console.error('Error toggling favorite status', error);
    }
};

export const searchMovies = (query) => async (dispatch) => {
    try {
        const response = await axios.get(`/api/movies/search/${query}`);
        dispatch({ type: 'SEARCH_MOVIES', payload: response.data });
    } catch (error) {
        console.error('Error searching movies', error);
    }
};

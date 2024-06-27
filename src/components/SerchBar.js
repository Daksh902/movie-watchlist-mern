import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../actions/movieAction';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchMovies(query));
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies..." />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;

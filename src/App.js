import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import AddMovie from './components/addMovie';
import EditMovie from './components/EditMovie';
import FavoriteMovies from './components/FavoriteMovies';
import './styles/App.css';
import SearchBar from './components/SerchBar';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MovieList />} />
                    <Route path="/" element={<SearchBar />} />
                    <Route path="/add" element={<AddMovie />} />
                    <Route path="/edit/:id" element={<EditMovie />} />
                    <Route path="/favorites" element={<FavoriteMovies />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;

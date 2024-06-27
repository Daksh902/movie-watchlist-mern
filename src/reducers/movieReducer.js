const initialState = [];

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return action.payload;
        case 'ADD_MOVIE':
            return [...state, action.payload];
        case 'GET_MOVIE':
            return state.find(movie => movie._id === action.payload._id);
        case 'UPDATE_MOVIE':
            return state.map(movie => movie._id === action.payload._id ? action.payload : movie);
        case 'DELETE_MOVIE':
            return state.filter(movie => movie._id !== action.payload);
        case 'TOGGLE_WATCHED':
            return state.map(movie => movie._id === action.payload._id ? action.payload : movie);
        case 'TOGGLE_FAVORITE':
            return state.map(movie => movie._id === action.payload._id ? action.payload : movie);
        case 'SEARCH_MOVIES':
            return action.payload;
        default:
            return state;
    }
};

export default movieReducer;

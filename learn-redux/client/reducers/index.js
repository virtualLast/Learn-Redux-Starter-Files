import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import postReducer from './posts';
import commentReducer from './comments';

const rootReducer = combineReducers({
    posts: postReducer,
    comments: commentReducer,
    routing: routerReducer
});

export default rootReducer;

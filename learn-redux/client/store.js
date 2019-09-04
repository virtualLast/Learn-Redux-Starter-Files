import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'
import {browserHistory} from 'react-router';

// reducers
import rootReducer from './reducers';

// data
import comments from './data/comments';
import posts from './data/posts';

const initialState = {
  posts,
  comments,
};

const store = createStore(rootReducer, initialState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;


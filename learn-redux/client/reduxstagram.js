// let's go!
import React from 'react';
import { render } from 'react-dom';

// styles
import css from './styles/style.styl';

// components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// store
import { Provider } from 'react-redux';
import store, { history }  from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));

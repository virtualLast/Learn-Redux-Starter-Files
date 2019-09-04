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

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid} />
            <Route path="/view/:postId" component={Single} />
        </Route>
    </Router>
);

render(router, document.getElementById('root'));

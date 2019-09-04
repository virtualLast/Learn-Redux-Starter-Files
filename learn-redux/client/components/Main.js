import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
});

Main.propTypes = {};

export default Main;

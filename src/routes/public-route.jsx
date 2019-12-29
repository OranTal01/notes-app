import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { currentUserSelector } from '../redux/user/user.selector';


const PublicRoute = ({ isAuthenticated, component: Component, ...otherProps }) => {
    return (
        <div>
            <Route { ...otherProps } component={ (props) =>
                isAuthenticated ? (<Redirect to="/notes" />) : (<Component { ...props } />) } />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!currentUserSelector(state)
});

export default connect(mapStateToProps)(PublicRoute);
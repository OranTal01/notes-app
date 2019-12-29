import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { currentUserSelector } from '../redux/user/user.selector';

const PrivateRoute = ({ isAuthenticated, component: Component, ...otherProps }) => {
    return (
        <div>
            <Route { ...otherProps } component={ (props) => (
                isAuthenticated ?
                    (<div> <Component { ...props } /></div>) : (<Redirect to='/' />)
            ) } />
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!currentUserSelector(state)
});

export default connect(mapStateToProps)(PrivateRoute)
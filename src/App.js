import React, { Component } from 'react';
import AppRouter from './routes';
import { auth } from './firebase/firebase';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
import { connect } from 'react-redux';


class NotesApp extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  };

  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(undefined, mapDispatchToProps)(NotesApp);

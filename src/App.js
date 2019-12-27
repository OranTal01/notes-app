import React, { Component } from 'react';
import AppRouter from './routes';
import { auth } from './firebase/firebase';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
import { connect } from 'react-redux';


class NotesApp extends Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    });
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

import React, { Component } from 'react';
import AppRouter from './routes/routes';
import { auth } from './firebase/firebase';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';
import { createUserProfileDocument } from './firebase/firebase-create-user';
import './App.css';

class NotesApp extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(user)
      }
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

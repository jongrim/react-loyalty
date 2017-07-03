import React from 'react';
import { firebaseAuth } from './config/firebase';

class User extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handleSignIn() {
    let provider = new firebaseAuth.GoogleAuthProvider();
    firebaseAuth()
      .signInWithPopup(provider)
      .then(function(result) {
        let token = result.credential.accessToken;
        let user = result.user;
        console.log(user, token);
      })
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
        console.error(errorCode, errorMessage, email, credential);
      });
  }

  render() {
    return (
      <button className="sign-in" onClick={this.handleSignIn}>
        Sign In
      </button>
    );
  }
}

export default User;

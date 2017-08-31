'use strict';

import firebase  from 'firebase';

class ApiRequest {
  
  constructor() {
    var config = {
      apiKey: "AIzaSyArvMKORnFxAJgUS80Qx5uSyNc5tGdTdPI",
      authDomain: "socialapp-ee9e1.firebaseapp.com",
      databaseURL: "https://socialapp-ee9e1.firebaseio.com",
      projectId: "socialapp-ee9e1",
      storageBucket: "socialapp-ee9e1.appspot.com",
      messagingSenderId: "256449235749"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
  
  signup(email, password) {


    return new Promise((next, error) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((authData) => {
          let userRef = this.firebase.child('profiles').child(authData.uid);
          userRef.set({ email: data.email })
            .then(() => next(data))
            .catch((err) => error(err));
        })
        .catch((err) => error(err));
    });
  }   

  login(emailOrTokenemail, password) {
    if (data && data.email && data.password) {
      return firebase.auth().signInWithEmailAndPassword(emailOrToken, password);
    } else {
      return firebase.auth().signInWithCustomToken(emailOrToken);
    }
  }

  logout() {
    firebase.auth().signOut();
  }
  loadUser(uid) {
    return new Promise((next, error) => {
      firebase.child('profiles').child(uid).once('value')
        .then((snapshot) => next(snapshot.val()))
        .catch((err) => error(err));
    });
  }
}

export default new ApiRequest();
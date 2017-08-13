import React from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';

import {
  Button,
  Card,
  CardSection,
  Header
} from './components/common'
import LoginForm from './components/LoginForm'

class App extends React.Component{
  componentWillMount(){
    var config = {
      apiKey: "AIzaSyCnmYIWx-3sCFaAs37QfjgrblqUmcEptwQ",
      authDomain: "reactnativeauth-2d9fe.firebaseapp.com",
      databaseURL: "https://reactnativeauth-2d9fe.firebaseio.com",
      projectId: "reactnativeauth-2d9fe",
      storageBucket: "reactnativeauth-2d9fe.appspot.com",
      messagingSenderId: "744330170185"
    };

    firebase.initializeApp(config);

  }
  render(){
    return(
      <View>
        <Header headerText='登入页面'/>
        <LoginForm/>
      </View>
    )
  }
}

export default App;
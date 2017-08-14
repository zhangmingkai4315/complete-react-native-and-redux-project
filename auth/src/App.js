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
  state = {loggedIn:false,user:null}
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
    firebase.auth().onAuthStateChanged((user)=>{
      if (user){
        this.setState({loggedIn:true,user:user})
      }else{
        this.setState({ loggedIn:false,user:null})
      }
    });
  }
  renderContent(){
    if(this.state.loggedIn){
      return (
      <Card>
        <CardSection>
            <Button onPress={()=>{firebase.auth().signOut()}} buttonTitle="登出系统"/>
        </CardSection>
      </Card>
      )
    }else{
      return <LoginForm/>
    }
  }
  render(){
    return(
      <View>
        <Header headerText='Auth系统'/>
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
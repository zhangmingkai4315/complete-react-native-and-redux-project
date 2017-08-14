import React, { Component } from 'react';
import { View ,TextInput,Text} from 'react-native';
import { Card, CardSection, Button, Input, Spinner} from './common';
import firebase from 'firebase'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading:false};
  onButtonPress(){
    const {email,password} = this.state;
    this.setState({ error: '', loading:true}) 
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
    .catch(()=>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this))
    });

  }
  onLoginSuccess(){
    this.setState({loading:false,email:'',password:'',error:''})
  }
  onLoginFail(){
    this.setState({ error: '认证失败', loading: false }) 
  }
  renderButton(){
    if(this.state.loading){
      return <Spinner size='small'/>
    }else{
      return <Button onPress={this.onButtonPress.bind(this)} buttonTitle="登入系统"></Button>
    }
  }
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='user@example.com'
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            labelName = 'Email'
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder='******'
            secureTextEntry = {true}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            labelName='Password'
          />
        
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
 errorTextStyle:{
   fontSize:10,
   alignSelf:'center',
   color:'red'
 }
}
export default LoginForm;
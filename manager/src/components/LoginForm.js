import React, { Component } from 'react'
import { View,Text }from 'react-native'
import { connect }from 'react-redux'
import {emailChanged,passwordChanged,loginUser} from '../actions'
import { Header,Spinner,Card ,CardSection,Input,Button} from './common'

class LoginForm extends Component {

  onEmailChange(text){
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='small' />
    } else {
      return <Button buttonTitle='登入系统' onPress={this.loginUser.bind(this)} />
    }
  }
  loginUser(){
    const {email,password} = this.props;
    if(email==='' || password ===''){
      return
    }
    console.log(email,password)
    this.props.loginUser(email,password);
  }
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            value = {this.props.email}
            labelName="Email" 
            placeholder="email@example.com"
            onChangeText = {this.onEmailChange.bind(this)}  
          />
        </CardSection>
        <CardSection>
          <Input  
          secureTextEntry
          value={this.props.password}
          onChangeText={this.onPasswordChange.bind(this)}  
          labelName="Password" 
          placeholder="password" /> 
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <CardSection>
        {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = ({auth}) => {
  const { email,password,error,loading} = auth;
  return {
    email:email,
    password:password,
    error:error,
    loading:loading
  }
}

const styles ={
  errorTextStyle:{
    fontSize:10,
    alignSelf:'center',
    color:'red'
  }
}
export default connect(mapStateToProps, 
  { emailChanged: emailChanged, passwordChanged:passwordChanged,loginUser:loginUser}
)(LoginForm)
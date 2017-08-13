import React, { Component } from 'react';
import { View ,TextInput} from 'react-native';
import { Card, CardSection, Button, Input} from './common';
class LoginForm extends Component {
  state = { email:'',password:''};

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
        <CardSection>
          <Button buttonTitle="登入系统"></Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
 
}
export default LoginForm;
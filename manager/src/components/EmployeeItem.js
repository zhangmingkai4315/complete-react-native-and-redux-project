import React, { Component } from 'react'
import { Text,View, TouchableWithoutFeedback} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { CardSection } from './common'

class EmployeeItem extends Component {
  onRowPress(){
    Actions.employeeEdit({ employee: this.props.employee})
  }
  render () {
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text>{this.props.employee.username}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default EmployeeItem
import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardSection } from './common'

class EmployeeItem extends Component {
  render () {
    return (
      <CardSection>
        <Text>{this.props.employee.username}</Text>
      </CardSection>
    )
  }
}

export default EmployeeItem
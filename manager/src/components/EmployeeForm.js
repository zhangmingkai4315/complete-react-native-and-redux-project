import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CardSection, Input} from './common'
import { View, Text, Picker } from 'react-native'
import { employeeUpdate } from '../actions'
class EmployeeForm extends Component {
  render () {
    return (
      <View>
        <CardSection>
          <Input
            value={this.props.username}
            onChangeText={(text) => { this.props.employeeUpdate({ props: 'username', value: text }) }}
            labelName="姓名"
            placeholder="张三" />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.phone}
            labelName="手机号"
            onChangeText={(text) => { this.props.employeeUpdate({ props: 'phone', value: text }) }}
            placeholder="123-456-789" />
        </CardSection>
        <CardSection style={styles.pickerContainerStyle}>
          <Text style={styles.pickerTextStyle}>选择上班时间</Text>
          <Picker selectedValue={this.props.shift}
            style={{ flex: 1 }}

            onValueChange={value => this.props.employeeUpdate({ props: 'shift', value: value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Monday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Firday" value="Firday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
    )
  }
}

const styles = {
  pickerContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerTextStyle: {
    fontSize: 18,
  },
  errorTextStyle: {
    fontSize: 10,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps=(state)=>{
  const { username, phone, shift, error } = state.employeeForm;
  return {
    username,
    phone,
    shift,
    error
  }
}
export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm)
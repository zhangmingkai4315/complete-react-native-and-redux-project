import React, {Component} from 'react'
import {connect} from 'react-redux';
import { Card, CardSection,Button} from './common'
import {employeeCreate } from '../actions'
import EmployeeForm from './EmployeeForm'


class EmployeeCreate extends Component{
  onButtonPress(){
    const {username,phone,shift} = this.props
    this.props.employeeCreate({ username,phone,shift});
  }
  render(){
    return(
    <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button buttonTitle="保存" onPress={this.onButtonPress.bind(this)}/>
        </CardSection>
    </Card>)  
  }
}
const mapStateToProps = (state) => {
  const { username, phone, shift, error } = state.employeeForm;
  return {
    username,
    phone,
    shift,
    error
  }
}
export default connect(mapStateToProps, {employeeCreate})(EmployeeCreate)
import React, {Component} from 'react'
import _ from 'lodash'
import {connect} from 'react-redux';
import { Card, CardSection,Button,Confirm} from './common'
import { employeeUpdate, employeeEdit, employeeDelete } from '../actions'
import EmployeeForm from './EmployeeForm'
import Communications from 'react-native-communications'
class EmployeeCreate extends Component{
  state={showModal:false}
  componentWillMount(){
    _.each(this.props.employee,(value,props)=>{
      this.props.employeeUpdate({props,value});
    });
  }
  onButtonPress(){
    const {username,phone,shift} = this.props
    this.props.employeeEdit({ username,phone,shift,uid:this.props.employee.uid});
  }
  onTextPress(){
    const { username, phone, shift } = this.props
    Communications.text(phone,`Your upcoming shift is on ${shift}`);
  }
  onDeletePress() {
    // const { username, phone, shift } = this.props
    console.log('delete')
    this.setState({showModal:true})
    
    // this.props.employeeCreate({ username, phone, shift });
  }
  onAccept(){
    this.props.employeeDelete({uid:this.props.employee.uid})
  }
  render(){
    return(
    <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button buttonTitle="保存修改" onPress={this.onButtonPress.bind(this)}/>
        </CardSection>
        <CardSection>
          <Button buttonTitle="发送短信" onPress={this.onTextPress.bind(this)}/>
        </CardSection>
        <CardSection>
          <Button buttonTitle="删除" onPress={this.onDeletePress.bind(this)} />
        </CardSection>
        <Confirm visible={this.state.showModal}
        onAccept={this.onAccept.bind(this)}
        onDecline={()=>this.setState({showModal:false})}
        >确定删除该雇员?</Confirm>
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
export default connect(mapStateToProps, { employeeDelete,employeeEdit,employeeUpdate})(EmployeeCreate)
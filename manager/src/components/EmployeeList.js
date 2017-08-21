import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import { View, Text ,ListView} from 'react-native';
import {employeeFetch} from '../actions'
import EmployeeItem from './EmployeeItem'
class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
    this.createDataSource(this.props)
  }
  componentWillReceiveProps(nextProps){
     this.createDataSource(nextProps)
  }
  createDataSource({employees}){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    })
    this.dataSource = ds.cloneWithRows(employees)
  }
  renderRow(data){
    return <EmployeeItem employee ={data}/>
  }
  render() {
    return (
      <ListView 
          dataSource ={this.dataSource} 
          enableEmptySections
          renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state =>{
  const employees = _.map(state.employees,(val,uid)=>{
    return { ...val, uid}
  })
  console.log(employees)
  return {
    employees:employees
  }
}

export default connect(mapStateToProps, { employeeFetch})(EmployeeList);
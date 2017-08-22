import React from 'react'
import { Scene, Router,Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmplyeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
const RouterComponent =()=>{
  return (
    <Router sceneStyle={{ paddingTop:65}}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="登入页面" />
      </Scene>
      <Scene key="main">
        <Scene 
        rightTitle="新增" 
          onRight={() => Actions.employeeCreate()} 
        key="employeelist" 
        component={EmplyeeList} 
        title="雇员列表"/>
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="新增雇员" />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="编辑信息" />
      </Scene>
    </Router>
  )
}

export default RouterComponent;
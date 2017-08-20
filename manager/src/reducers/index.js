import {combineReducers} from 'redux'
import Auth from './authReducer'
import EmployeeForm from './employeeFormReducer'
import employees from './employeesReducer'
export default combineReducers({
  auth:Auth,
  employeeForm:EmployeeForm,
  employees
});
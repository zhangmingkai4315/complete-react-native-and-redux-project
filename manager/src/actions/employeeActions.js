import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'
import * as Types from '../Types';


export const employeeUpdate = ({props,value}) => {
  return {
    type:Types.EMPLOYEE_UPDATE,
    payload:{props,value}
  }
} 
const createEmployeeFailure = ()=>{
  return {
    type:Types.CREATE_EMPLOYEE_FAILURE
  }
}
const createEmployee= () => {
  return {
    type: Types.CREATE_EMPLOYEE
  }
}

const fetchEmployeesSuccess = (data) => {
  return {
    type: Types.FETCH_EMPLOYEES_SUCCESS,
    payload:data
  }
}
export const employeeCreate = ({username,phone,shift}) =>{
  return (dispatch)=>{
    const {currentUser} =firebase.auth()
    console.log(currentUser.uid)
    if(!currentUser || !currentUser.uid){
      Actions.auth()
      return
    }
    firebase.database()
        .ref(`/user/${currentUser.uid}/employees`)
        .push({username,phone,shift})
        .then(() => {
          dispatch(createEmployee())
          Actions.employeelist({type:'reset'})
        })
        .catch(() => dispatch(createEmployeeFailure()))
  }
}
function employEditSuccess(){
  return {
    type: Types.EMPLOYEE_EDIT_SUCCESS
  }
}
export const employeeEdit = ({ username, phone, shift,uid}) => {
  return (dispatch) => {
    const { currentUser } = firebase.auth()
    console.log(currentUser.uid)
    if (!currentUser || !currentUser.uid) {
      Actions.auth()
      return
    }
    firebase.database()
      .ref(`/user/${currentUser.uid}/employees/${uid}`)
      .set({ username, phone, shift })
      .then(() => {
        dispatch(employEditSuccess())
        Actions.employeelist({ type: 'reset' })
      })
      .catch(() => dispatch(createEmployeeFailure()))
  }
}

export const employeeDelete = ({ uid }) => {
  return (dispatch) => {
    const { currentUser } = firebase.auth()
    console.log(currentUser.uid)
    if (!currentUser || !currentUser.uid) {
      Actions.auth()
      return
    }
    firebase.database()
      .ref(`/user/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeelist({ type: 'reset' })
      })
      .catch(() => dispatch(createEmployeeFailure()))
  }
}

export const employeeFetch =()=> {
  const { currentUser } = firebase.auth();
  console.log(currentUser)
  return (dispatch) => {
    firebase.database().ref(`/user/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        console.log(snapshot)
        dispatch(fetchEmployeesSuccess(snapshot.val()));
      });
  };
}
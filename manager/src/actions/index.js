import firebase from 'firebase'
import * as Types from '../Types'
export const emailChanged = (text)=>{
  return {
    type:Types.EMAIL_CHANGED,
    payload:text
  }
}

export const passwordChanged = (text) => {
  return {
    type: Types.PASSWORD_CHANGED,
    payload: text
  }
}

function loginSuccess(user){
  return {
    type:Types.LOGIN_SUCCESS,
    payload:user
  }
}

function loginFailure(error) {
  console.log(error)
  return {
    type: Types.LOGIN_FAILURE,
    payload:error
  }
}
function loginStart(error) {
  console.log(error)
  return {
    type: Types.LOGIN_START,
  }
}
export const loginUser = (email,password)=>{
  return (dispatch) =>{
      dispatch(loginStart())
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => dispatch(loginSuccess(user)))
        .catch(error => {
          firebase.auth().createUserWithEmailAndPassword(email,password)
                  .then(user => dispatch(loginSuccess(user)))
                  .catch(error => dispatch(loginFailure(error)))
        });
      }
  }

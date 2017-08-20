import {EMPLOYEE_UPDATE,CREATE_EMPLOYEE,CREATE_EMPLOYEE_FAILURE} from '../Types'

const INITIAL_STATE = { username:'',phone:'',shift:'Monday',error:''}

export default (state = INITIAL_STATE, action)=>{
  switch(action.type){
    case EMPLOYEE_UPDATE:
      console.log(action)
      return { ...state, error:'',[action.payload.props]:action.payload.value}
    case CREATE_EMPLOYEE:
      return INITIAL_STATE;
    case CREATE_EMPLOYEE_FAILURE:
      return {...state,error:'创建用户失败，请稍后再试'}
    default:
      return state
  }
}


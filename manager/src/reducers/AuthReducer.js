import * as Types from '../Types'
const INITIAL_STATE = {'email':'',password:'',loading:false,user:null,error:''}
export default (state=INITIAL_STATE,action)=>{
  switch(action.type){
    case Types.EMAIL_CHANGED:
      return { ...state,email:action.payload}  // Object.assign({},state,{email:action.payload})
    case Types.PASSWORD_CHANGED:
      return { ...state, password: action.payload }  // Object.assign({},state,{email:action.payload})
    case Types.LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE,user: action.payload}
    case Types.LOGIN_FAILURE:
      return {...state,loading:false,error:'认证失败',password:''}
    case Types.LOGIN_START:
      return {...state,loading:true}
    default:
      return state
  }
}
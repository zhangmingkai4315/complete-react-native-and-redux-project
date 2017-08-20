import {
  FETCH_EMPLOYEES_SUCCESS
} from '../Types';

const INITIAL_STATE ={}

export default (state = INITIAL_STATE,action )=>{
  switch(action.type){
    case FETCH_EMPLOYEES_SUCCESS:
    console.log(action)
    return state
    default:
    return state
  }
}

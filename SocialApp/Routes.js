import Home from './Views/Screens/Home';
import LogoutButton from './Views/LogoutButton';
import PostButton from './Views/PostButton';
class Routes{
  get(route,args){
    if("undefined"==typeof this[route]){
      console.warn('no route found with name:'+route);
      return false
    }else{
      return this[route].call(this,args)
    }
  }
  home(){
    return {
      name:'Home',
      title:"Socail",
      component:Home,
      leftButton: LogoutButton,
      rightButton: PostButton,
      hideNavigationBar:false,
      statusBarStyle:'light-content'
    }
  }
}

export default new Routes()
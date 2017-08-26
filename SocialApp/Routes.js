import Home from './Views/Screens/Home';

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
      leftButton:null,
      rightButton:null,
      hideNavigationBar:false,
      statusBarStyle:'light-content'
    }
  }
}

export default new Routes()
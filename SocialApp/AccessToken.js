import React from 'react'
import {
  AsyncStorage
} from 'react-native'

class AccessToken {
  get(){
     return new Promise((next,error)=>{
       if(this._accessToken) return next(this._accessToken)
       AccessToken.getItem('ACCESS_TOKEN').then(token=>{
         if(token){
           next(token)
         }else{
           error();
         }
       }).catch(error=>error(e))
     })
  }
  set(token){
    this._accessToken = token
    return AsyncStorage.setItem('ACCESS_TOKEN',token)
  }
  clear(){
    this._accessToken =null
    AsyncStorage.removeItem('ACCESS_TOKEN')
  }
}
export default new AccessToken()
'use strict'
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  PropTyles,
  ActivityIndicator
} from 'react-native'
import StyleVars from '../StyleVars'


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems :'center',
    justifyContent:'center',
    backgroundColor:StyleVars.Color.mediumBackground
  },
  text:{
    fontFamily:StyleVars.Fonts.gerneral,
    color:StyleVars.Color.primary,
    textAlign:'center',
    marginTop:12
  }
})



class LoadingView extends Component {
  render () {
    var containerStyle = {}
    if(this.props.backgroundColor){
      containerStyle = {backgroundColor:this.props.backgroundColor}
    }
    return (
        <View style={[styles.container,containerStyle]}>
          <ActivityIndicator color={StyleVars.Color.primary}/>
          <Text style={styles.text}>{this.props.children}</Text>
        </View>
    )
  }
}

export default LoadingView;
import React, { Component ,PropTypes} from 'react'

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

import StyleVars from '../StyleVars'

const styles = StyleSheet.create({
  button:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    paddingVertical:9,
    paddingHorizontal:15,
    overflow:'hidden',
    backgroundColor:StyleVars.Color.primary
  },
  buttonText:{
    color:'white',
    fontFamily:StyleVars.Fonts.gerneral,
    fontSize:14,
    fontWeight:"400"
  }
})
class Button extends Component {
  onPress(){
    if(this.props.enabled){
      this.props.onPress()
    }
  }
  render () {
    var textStyle = [styles.buttonText,this.props.textStyle];
    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity}
        onPress = {()=>this.onPress()}
        style = {[styles.button,this.props.styles]}>
        <Text style={textStyle}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

Button.propTypes={
  onPress:PropTypes.func,
  style:View.propTypes.style,
  textStyle:View.propTypes.style,
  activeOpacity:PropTypes.number,
  enabled:PropTypes.bool,
  children:PropTypes.string
};

Button.defaultProps={
  onPress:()=>{},
  activeOpacity:0.8,
  enabled:true,
  textStyle:{},
  style:{},
}

export default Button
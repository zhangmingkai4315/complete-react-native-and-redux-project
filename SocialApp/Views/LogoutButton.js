import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native'
class LogoutButton extends Component {
  onPress(){
    
  }
  render () {
    let style = {marginLeft:10,color:'white'}
    return (
      <TouchableOpacity
        style={this.props.style}
        activeOpacity={0.5}
        onPress={()=>this.onPress()}
      >
        <Text style={style}>Logout</Text>
      </TouchableOpacity>
    )
  }
}

export default LogoutButton
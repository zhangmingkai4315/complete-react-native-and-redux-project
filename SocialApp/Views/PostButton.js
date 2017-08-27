import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native'
class PostButton extends Component {
  onPress() {

  }
  render() {
    let style = { marginRight: 10, color: 'white' }
    return (
      <TouchableOpacity
        style={this.props.style}
        activeOpacity={0.5}
        onPress={() => this.onPress()}
      >
        <Text style={style}>Post</Text>
      </TouchableOpacity>
    )
  }
}

export default PostButton
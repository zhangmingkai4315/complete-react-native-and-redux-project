import React, { Component, PropTypes } from 'react'
import { Card,CardSection,Spinner } from './common'
import {Text,View} from 'react-native'
class ListItem extends Component {
  render () {
    return (
      <CardSection>
        <Text style={styles.titleStyle}>{this.props.item.title}</Text>
      </CardSection>
    )
  }
}

const styles = {
  titleStyle:{
    fontSize : 18,
    paddingLeft:15
  }
}
export default ListItem
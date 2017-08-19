import React, { Component, PropTypes } from 'react'
import { Card,CardSection,Spinner } from './common'
import {connect} from 'react-redux'
import {Text,View,TouchableWithoutFeedback} from 'react-native'
import * as actions from '../actions'

class ListItem extends Component {
  renderDescription(){
    console.log(this.props.item.id, this.props.selection)
    if (this.props.item.id === this.props.selection){
      return (
        <Text>{this.props.item.description}</Text>
      )
    }
  }
  render () {
    const {id,title} = this.props.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibray(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
            
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle:{
    fontSize : 18,
    paddingLeft:15
  }
}

const mapStateToProps = state => {
  return {
    selection: state.selection
  }
}
export default connect(mapStateToProps,actions)(ListItem)
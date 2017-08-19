import React, { Component, PropTypes } from 'react'
import { Card,CardSection,Spinner } from './common'
import {connect} from 'react-redux'
import {Text,View,TouchableWithoutFeedback,LayoutAnimation} from 'react-native'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.spring();
  }
  renderDescription(){
    if (this.props.expanded){
      return (
        <CardSection>
          <Text style={{flex:1,padding:10}}>
            {this.props.item.description}
          </Text>
        </CardSection>
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

const mapStateToProps =(state,ownProps) => {
  const expanded = state.selection === ownProps.item.id
  return {
    expanded
  }
}
export default connect(mapStateToProps,actions)(ListItem)
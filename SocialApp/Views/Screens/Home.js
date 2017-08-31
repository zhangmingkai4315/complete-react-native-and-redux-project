import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import SharedStyles from '../../SharedStyles';
import StyleVars from '../../StyleVars';
import Button from '../Button';
import Routes from '../../Routes'
import LoadingView from '../LoadingView';
import Actions from '../../Actions';

const styles = StyleSheet.create({
  buttonContainer:{
    paddingTop:96,
    alignItems :"center"
  },
  button:{
    width:256
  },
  reloadText:{
    textAlign:'center',
    marginVertical:20
  }
})

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      loaded:false,
      failed:true
    }
  }
  componentWillMount(){
    Actions.auth()
  }
  componentDidMount() {
    Actions.loadUser.completed.listen(this._onLoadUserCompleted.bind(this))
    Actions.logout.listen(this._onLogout.bind(this))
  }

  _onLoadUserCompleted(){

  }
  _onLogout(){
    this.props.replaceRoute(Routes.login());
  }

  _retryFetch(){

  }
  render () {
    if(this.state.failed){
      return (
        <View style={[SharedStyles.sceenContainer,styles.buttonContainer]}>
          <Text style={[SharedStyles.headingText,styles.reloadText]}>
            Could not fetch posts
          </Text>
          <Button onPress={() => this._retryFetch()} style={styles.button}>点击重试</Button>
        </View>
      )
    }else if(this.state.loaded){
      return <View style={SharedStyles.sceenContainer}/>
    }else{
      return (
        <LoadingView backgroundColor={StyleVars.Color.mediumBackground}>
          Loading...
        </LoadingView>
      )
    }
  }
}

export default Home
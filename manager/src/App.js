import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { Provider ,connect } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'

import reducers from './reducers'




class App extends Component {
  componentWillMount(){
    var config = {
      apiKey: 'AIzaSyA5wDPj0Px_Y9OEqlri5xPrbKnfKm3BXKM',
      authDomain: 'manager-b038b.firebaseapp.com',
      databaseURL: 'https://manager-b038b.firebaseio.com',
      projectId: 'manager-b038b',
      storageBucket: 'manager-b038b.appspot.com',
      messagingSenderId: '24165395346'
    };
    firebase.initializeApp(config);
  }
  render () {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    )
  }
}

export default App
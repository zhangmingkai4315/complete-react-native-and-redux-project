import React, { Component, PropTypes } from 'react'
import { View ,Text} from 'react-native'
import { Provider ,connect } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import Router from './Router'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <Router/>
        </View>
      </Provider>
    )
  }
}

export default App
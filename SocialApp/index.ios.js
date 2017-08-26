'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RootNavigator from './Views/RootNavigator'

console.disableYellowBox=true

export default class SocialApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator ref="rootNavigator"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'absolute',
    left:0,
    right:0,
    bottom:0,
    top:0
  }
});

AppRegistry.registerComponent('SocialApp', () => SocialApp);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
export default class expert extends Component {
  componentDidMount() {
    // do anything while splash screen keeps, use await to wait for an async task.
    SplashScreen.hide();
    // console.log('SplashScreen');
  }
  render() {
    return (
      <View>
        <Text>ahihi do ngoc</Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('expert', () => expert);

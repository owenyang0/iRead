import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  NavigatorIOS
} from 'react-native'

import About from './components/About'

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: About,
          title: 'Me',
        }}
        style={{ flex: 1 }}
      />
    )
  }
}

import React, { Component } from 'react'

import {
  NavigatorIOS,
} from 'react-native'

import About from './components/About'

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        ref={nav => { this.nav = nav }}
        initialRoute={{
          component: About,
          title: 'Me',
        }}
        style={{ flex: 1 }}
      />
    )
  }
}

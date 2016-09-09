import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Text
} from 'react-native'

export default class About extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Test About Rfoaaaute</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
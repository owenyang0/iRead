import React from 'react'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Me extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Welcome to me</Text>
      </View>
    )
  }
}

export default Me

import React from 'react'
import {
  View,
  NavigatorIOS,
  StyleSheet,
} from 'react-native'

import RecentRead from '../components/RecentRead'

class Activity extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: RecentRead,
          title: '最近阅读',
        }}
        style={{ flex: 1 }}
      />
    )
  }
}

export default Activity

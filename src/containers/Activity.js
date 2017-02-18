import React from 'react'
import {
  NavigatorIOS,
  StyleSheet,
} from 'react-native'

import RecentRead from '../components/RecentRead'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
})

const Activity = () => (
  <NavigatorIOS
    initialRoute={{
      component: RecentRead,
      title: '最近阅读',
      backButtonTitle: 'back',
      shadowHidden: true,
    }}
    style={styles.wrapper}
  />
)

export default Activity

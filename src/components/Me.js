import React from 'react'

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import profileImage from '../images/profile-background.png'
import avatarImage from '../images/avatar.png'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  banner: {
    height: 130,
  },
  profile: {
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  profileMeta: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'absolute',
    top: -35,
  },
  nickname: {
    marginTop: 45,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  statistic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  key: {
    color: '#A3A3A3',
  },
  value: {
    fontWeight: 'bold',
  },
})

class Me extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          source={profileImage}
          style={styles.banner}
        />
        <View style={styles.profile}>
          <View style={styles.profileMeta}>
            <Image
              source={avatarImage}
              style={styles.avatar}
            />
            <Text style={styles.nickname}>Owen Yang</Text>
          </View>
          <View style={styles.statistic}>
            <View style={styles.item}>
              <Text style={styles.value}>50本</Text>
              <Text style={styles.key}>今年目标</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.value}>26本</Text>
              <Text style={styles.key}>完成阅读</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.value}>2.3本/天</Text>
              <Text style={styles.key}>平均速度</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Me

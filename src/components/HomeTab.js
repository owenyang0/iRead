import React from 'react'

import {
  TabBarIOS,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import Activity from '../containers/Activity'
import Me from './Me'

class HomeTabBar extends React.Component {
  state = {
    selectedTab: 'me',
  };

  handleTabPress(tabName) {
    this.setState({
      selectedTab: tabName,
    })
  }

  render() {
    return (
      <TabBarIOS
        barTintColor="#fff"
        tintColor="#1B95E0"
      >
        <Icon.TabBarItem
          title="动态"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          onPress={() => this.handleTabPress('home')}
          selected={this.state.selectedTab === 'home'}
        >
          <Activity />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="我"
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          onPress={() => this.handleTabPress('me')}
          selected={this.state.selectedTab === 'me'}
        >
          <Me />
        </Icon.TabBarItem>
      </TabBarIOS>
    )
  }
}

export default HomeTabBar

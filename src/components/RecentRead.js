import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
} from 'react-native'


import collections from '../data/collections'

const styles = StyleSheet.create({
  bookImage: {
    marginRight: 20,
  },
  row: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: '#cfcfcf',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    flex: 1,
  },
})

class RecentRead extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(collections.collections),
    }
  }

  renderRow = (row) => {
    const { book } = row
    return (
      <View style={styles.row}>
        <Image
          source={{ uri: book.images.large, height: 130, width: 95 }}
          style={styles.bookImage}
          resizeMode="contain"
        />
        <View style={styles.rowText}>
          <Text>{book.title}</Text>
          <Text>{row.comment}</Text>
          <Text>{book.pages}</Text>
          <Text>{book.author.join(' ')}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        <Text>Recent Read</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    )
  }
}

export default RecentRead

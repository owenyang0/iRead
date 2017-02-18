import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ListView,
  SegmentedControlIOS,
  StyleSheet,
} from 'react-native'


import collections from '../data/collections'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 64,
  },
  segment: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  bookList: {
    marginBottom: 48,
  },
  bookImage: {
    marginRight: 15,
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
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  author: {
    color: '#908F8F',
    marginVertical: 5,
  },
  comment: {
    marginTop: 10,
    color: '#585757',
  },
  pages: {
    marginTop: 10,
    color: '#908F8F',
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
          source={{ uri: book.images.large, width: 95 }}
          style={styles.bookImage}
          resizeMode="contain"
        />
        <View style={styles.rowText}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author.join(' ')}</Text>
          <Text style={styles.comment}>{row.comment}</Text>
          <Text style={styles.pages}>{book.pages} 页</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.segment}>
          <SegmentedControlIOS values={['已读', '在读', '想读']} selectedIndex={0} tintColor="#2aa2ef" />
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          automaticallyAdjustContentInsets={false}
          style={styles.bookList}
        />
      </View>
    )
  }
}

export default RecentRead

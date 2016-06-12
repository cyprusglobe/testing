
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ListView, Text, StyleSheet, InteractionManager } from 'react-native'
import * as balloonActionCreators from '../actions/balloonActions'
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar'
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'

class BalloonScroll extends Component {
  constructor(props) {
    super(props)
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      balloons: [],
      isLoading: false
    }
  }

  componentWillMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.fetchAndSetBalloons();
    })

  }
  
  renderLoading() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    )
  }

  _renderRow(balloon) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: balloon.photos_url + '/1000x'}}
          style={styles.thumbnail}
          indicatorProps={{
            indeterminate: false
          }}
          indicator={ProgressBar}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{balloon.balloon_name}</Text>
          <Text style={styles.year}>{balloon.reg_num}</Text>
          <Button  onPress={() => Actions.balloon_detail({data: balloon})}>Fuck</Button>
        </View>
      </View>
    )
  }

  render() {
    const dataSource = this.dataSource.cloneWithRows(this.props.balloons);

    if (this.props.isLoading) {
      return (
        this.renderLoading()
      )
    } else {
      return (
        <ListView
          removeClippedSubviews={true}
          enableEmptySections={true}
          dataSource={dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
          style={styles.listView}
        />
      )
    }
  }
}

var styles = StyleSheet.create({
  container: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    rightContainer: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    year: {
      textAlign: 'center',
    },
    thumbnail: {
      width: 53,
      height: 81,
    },
    listView: {
      flex: 1,
      paddingTop: 64,
      backgroundColor: '#F5FCFF',
    },
})

function mapStateToProps(state) {
  return {
    balloons: state.balloon.balloons,
    isLoading: state.balloon.isLoading
  }
}
export default connect(mapStateToProps, balloonActionCreators)(BalloonScroll)

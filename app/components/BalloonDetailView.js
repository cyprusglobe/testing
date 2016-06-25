import React, {Component} from 'react'
import shallowequal from 'shallowequal'
import {connect} from 'react-redux'
import {View, Text, StyleSheet, InteractionManager} from 'react-native'
import * as balloonActionCreators from '../actions/balloon/actions'
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar'
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'

class BalloonDetailView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: {
        item: {}
      },
      isLoadingb: false
    }
  }

  render() {
    if (this.props.isLoadingb) {
      return (
          <View style={styles.container}>
            <Text style={styles.heading}>Loading...</Text>
          </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Image
              source={{
                uri: this.props.result.photos_url + '/300x'
              }}
              style={styles.thumbnail} />
            <Text style={styles.heading}>{this.props.result.balloon_name}</Text>
        </View>
      )
    }
  }
}

var styles = StyleSheet.create({
  base: {
    width: 38,
    height: 38,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  heading: {
    fontSize: 30,
    fontWeight: '100',
  },
  thumbnail: {
    width: 300,
    height: 300,
    marginRight: 10,
  },
})

function mapStateToProps(state) {
  return {
    result: state.balloontest.item,
    isLoadingb: state.balloontest.isLoadingb
  }
}


export default connect(mapStateToProps, balloonActionCreators)(BalloonDetailView)

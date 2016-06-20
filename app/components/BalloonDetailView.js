import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet, InteractionManager} from 'react-native'
import * as balloonActionCreators from '../actions/balloonActions'
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'
import {fetchBalloons} from '../api/balloon'

class BalloonDetailView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balloon: {}
    }
  }

  componentWillMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.fetchAndSetBalloon(this.props.balloon_detail.id)
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>{ this.props.balloon.balloon_name }</Text>
        </View>
    )
  }
}

var styles = StyleSheet.create({
  base: {
    width: 38,
    height: 38,
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#f2f2f2',
    flex: 1,
    paddingTop: 64
  },
  heading: {
    fontSize: 30,
    fontWeight: "100",
  }
})

function mapStateToProps(state) {
  console.log(state)
  return {
    balloon: state.balloon
  }
}


export default connect(mapStateToProps, balloonActionCreators)(BalloonDetailView)

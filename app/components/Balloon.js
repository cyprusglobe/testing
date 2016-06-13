import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet, InteractionManager} from 'react-native'
import * as balloonActionCreators from '../actions/balloonActions'
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'
import {fetchBalloons} from '../api/balloon'

class Balloon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balloons: []
    }
  }

  componentWillMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.fetchAndSetBalloons()
    })
  }

  dispatchActionAgain() {
    this.props.fetchAndSetBalloons()
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Balloon Fiesta 2016</Text>
          <Text style={styles.heading}>Balloons Counts: {this.props.balloons.length}</Text>
          <Button style={styles.btn} onPress={this.dispatchActionAgain.bind(this)}>Try Again</Button>
              {
                this.props.balloons.map((balloon) => {
                  const photo_url = balloon.photos_url + '/500x'
                  return (
                      <View key={balloon.id}>
                        <Image
                          source={{uri: photo_url}}
                          style={{
                            width: 320,
                            height: 320,
                          }}
                          indicatorProps={{
                            indeterminate: false
                          }}
                          indicator={ProgressBar}
                        />
                        <Text>
                          {balloon.reg_num}
                        </Text>
                      </View>
                  )
                })
              }
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
  return {
    balloons: state.balloon.balloons
  }
}


export default connect(mapStateToProps, balloonActionCreators)(Balloon)

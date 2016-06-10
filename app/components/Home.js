import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, StyleSheet } from 'react-native'
import * as balloonActionCreators from '../actions/balloon'

 class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        balloons: {}
    }
  }

  componentDidMount = () => {

    this.props.fetchAndSetBalloons()
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Balloon Fiesta 2016</Text>
            <Text style={styles.heading}>Balloons Counts: {this.props.balloons.length}</Text>
        </View>
    )
  }
}
 
var styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent:"space-between",
    backgroundColor: '#f2f2f2',
    paddingTop:40,
  },
  heading: {
    fontSize: 30,
    fontWeight: "100",
  }
})
 
 export default connect(
     (state) => ({ balloons: state.balloon.balloons }),
     (dispatch) => (bindActionCreators(balloonActionCreators, dispatch))
 )(Home)
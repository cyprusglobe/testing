import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, StyleSheet } from 'react-native'
import * as balloonActionCreators from '../actions/balloonActions'

 class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Balloon Fiesta 2016</Text>
            <Text>{this.props.data.balloon_name}</Text>
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

 export default connect()(Home)

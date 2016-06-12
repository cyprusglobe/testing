import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, StyleSheet } from 'react-native'
import * as scheduleActionCreators from '../actions/eventActions'

class Schedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: {}
    }
  }

  componentDidMount = () => {
    this.props.fetchAndSetEvents()
  }

  render() {
    console.log(this.props.events)
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Schedule</Text>
          ﻿
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
    justifyContent:"space-between",
    backgroundColor: '#f2f2f2',
    paddingTop:46,
  },
  heading: {
    fontSize: 30,
    fontWeight: "100",
  }
})

function mapStateToProps(state) {
  return {
    events: state.event.events
  }
}


export default connect(mapStateToProps, scheduleActionCreators)(Schedule)
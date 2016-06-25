import React, { Component } from 'react'
import BalloonListView from '../components/BalloonListView'
import BalloonDetailView from '../components/BalloonDetailView'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from 'react-native-button'

export const MainRouter = {
  getBalloonsRoute () {
    return {
      renderScene(navigator) {
        return (
          <BalloonListView navigator={navigator} />
        )
      },
      onDidFocus(event) {
        console.log('Home Scene received focus.')
      },
      getTitle() {
        return 'Balloons'
      },
    }
  },
  getBalloonRoute (id) {
    return {
      renderScene(navigator) {
        return (
          <BalloonDetailView id={id} navigator={navigator} />
        )
      },
      onDidFocus(event) {
        console.log('Home Scene received focus.')
      },
      getTitle() {
        return 'Balloon'
      },
    }
  }
}

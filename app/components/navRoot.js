import React, { Component } from 'react'
import {Navigator, Text} from 'react-native'
import ExNavigator from '@exponent/react-native-navigator'
import {MainRouter} from '../constants/router'

import BalloonListView from './BalloonListView'
import BalloonDetailView from './BalloonDetailView'
var NavigationBarRouteMapper = {
  LeftButton: function( route, navigator, index, navState ){
    return(
      <Text>{ route.leftButton }</Text>
    )
  },
  Title: function( route, navigator, index, navState ){
    return(
      <Text>{ route.title }</Text>
    )
  },
  RightButton: function( route, navigator, index, navState ){
    return(
      <Text>{ route.rightButton }</Text>
    )
}
}

class NavigationRoot extends Component {
  constructor (props) {
    super(props)
  }



  renderScene ( route, nav ) {
    switch (route.id) {
      case 'PageOne':
        return <BalloonListView navigator={nav} title={ "Balloons" } />
      case 'PageTwo':
        console.log(route)
        return <BalloonDetailView id={route.passProps.id} navigator={nav} leftButton={ "Back" } title={ "PageTwo" } />
    }
  }

  render () {

    return (
      <Navigator
        initialRoute={{ id: 'PageOne', title: 'PageOne' }}
        renderScene={ this.renderScene }
        configureScene={( route ) => {
          if ( route.sceneConfig ) {
            return route.sceneConfig
          }
          return Navigator.SceneConfigs.FloatFromRight
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={ NavigationBarRouteMapper }
          />
        }
      />
    )
  }
}

export default NavigationRoot

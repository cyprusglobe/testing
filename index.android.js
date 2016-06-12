/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import axios from 'axios'
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './app/stores/configureStore';
import Routes from './app/config/routes'
import './app/config/reactotronConfig'

const store = configureStore();

class BFApp extends Component {
  render() {
    return (
        <Provider store={store}>
          <Routes />
        </Provider>
    )
  }
}

AppRegistry.registerComponent('BFApp', () => BFApp);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import axios from 'axios'
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './app/components/Schedule';
import configureStore from './app/stores/configureStore';
import Routes from './app/config/routes'
import './app/config/reactotronConfig'

import { AUTH_TOKEN, AUTH_TOKEN_TYPE } from './app/constants/api'

axios.defaults.responseType = 'json'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN_TYPE + ' ' + AUTH_TOKEN

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

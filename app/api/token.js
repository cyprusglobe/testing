import axios from 'axios'
import { AsyncStorage } from 'react-native'

function setAuth ({ headers, data}) {
  AsyncStorage.setItem('api-token', headers['x-api-token'])
  return data
}

function checkAuth () {
  return AsyncStorage.getItem('api-token')
}

export {
  setAuth,
  checkAuth,
}
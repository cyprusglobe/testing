import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import Reactotron from 'reactotron'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { AUTH_TOKEN, AUTH_TOKEN_TYPE } from '../constants/api'

export default function configureStore(initialState) {

  const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL:'http://192.168.10.234:6543/2016'
  })

  const store = createStore(
      reducer,
      initialState,
      compose(
          applyMiddleware(thunk, axiosMiddleware(client)),
          Reactotron.storeEnhancer()
      )
  );

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }


  return store
}


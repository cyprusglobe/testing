import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import devTools from 'remote-redux-devtools'
 
export default function configureStore (initialState) {
  const enhancer = compose(
      applyMiddleware(thunk),
      devTools()
  );


  const store = createStore(rootReducer, initialState, enhancer);

  return store
}


import { combineReducers } from 'redux'
import account from './account'
import store from './store'
import balloon from './balloon'
 
export default combineReducers({
  account,
  balloon,
  store,
});
 
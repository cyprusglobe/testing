import {combineReducers} from 'redux'
import balloon from './balloon'
import event from './event'

const rootReducer = combineReducers({
  balloon,
  event
})

export default rootReducer
 
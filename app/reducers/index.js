import {combineReducers} from 'redux'
import balloon from './balloon'
import balloons from './balloons'
import event from './event'

const rootReducer = combineReducers({
  balloon,
  balloons,
  event
})

export default rootReducer

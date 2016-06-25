import {combineReducers} from 'redux'
import balloon from './balloon'
import balloons from './balloons'
import balloonstest from './balloonstest'
import balloontest from './balloontest'

const rootReducer = combineReducers({
  balloon,
  balloons,
  balloonstest,
  balloontest
})

export default rootReducer

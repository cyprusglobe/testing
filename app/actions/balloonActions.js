import {fetchBalloons} from '../api/balloon'
import * as types from '../constants/balloonActionTypes'

export function fetchingBalloon(status) {
  return {
    type: types.FETCHING_BALLOONS,
    fetching: status
  }
}

export function fetchError(error) {
  return {
    type: types.SET_BALLOONS_FAIL,
    error: error
  }
}

export function setCurrent(store) {
  return {
    type: types.SET_CURRENT_BALLOON,
    current: store
  }
}

export function fetchAndSetBalloons() {
  return function (dispatch) {
    return dispatch(fetchBalloons())
  }
}

export function setCurrentBalloon(store) {
  return function (dispatch) {
    return {balloon: store}
  }, (err, data) => {
    if (err) return dispatch(fetchError(err))
    dispatch(setCurrent(store))
  }
}
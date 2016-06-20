import {fetchBalloon, fetchBalloonsWithPage} from '../api/balloon'
import * as types from '../constants/balloonActionTypes'

export function fetchError(error) {
  return {
    type: types.SET_BALLOONS_FAIL,
    error: error
  }
}

export function fetchAndSetBalloonsWithPage(page) {
  return function (dispatch) {
    return dispatch(fetchBalloonsWithPage(page))
  }
}

export function fetchAndSetBalloon(id) {
  return function (dispatch) {
    return dispatch(fetchBalloon(id))
  }
}

import {fetchBalloons} from '../api/balloon'

export const FETCHING_BALLOONS = 'FETCHING_BALLOONS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const SET_BALLOONS = 'SET_BALLOONS'
export const SET_CURRENT = 'SET_CURRENT'

export function fetchingBalloon(status) {
  return {
    type: FETCHING_BALLOONS,
    fetching: status
  }
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error: error
  }
}

export function setBalloons(data) {
  return {
    type: SET_BALLOONS,
    balloons: data,
  }
}

export function setCurrent(store) {
  return {
    type: SET_CURRENT,
    current: store
  }
}

export function fetchAndSetBalloons() {
  return function (dispatch, getState) {
    return fetchBalloons()
            .then((res) => res.json())
    .then((data) => dispatch(setBalloons(data)))
    .catch((err) => dispatch(fetchError(err)))
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
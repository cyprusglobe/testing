import {
  fetchBalloon
} from '../../api/balloon/payload'

import {AUTH_TOKEN_TYPE, AUTH_TOKEN} from '../../constants/api'
import {
  onBalloonDetailReceived
} from '../../api/balloons/fetch'

export function fetchAndSetBalloon(id) {
  return function (dispatch) {
    return dispatch(fetchBalloon(id))
  }
}

export function requestFetchStuff() {
  return {
    type: 'REQUEST_BALLOON_DETAIL',
  }
}

export function fetchStuff(id) {
  const init = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': AUTH_TOKEN_TYPE + ' ' + AUTH_TOKEN
        }
    }
  return function (dispatch) {
    dispatch(requestFetchStuff())
    return fetch('http://localhost:6543/2016/balloon/' + id, init)
      .then((response) => response.json())
      .then((json) => {
        dispatch(onBalloonDetailReceived(json))
      })
      .catch((error) => {
        console.warn(error)
      })
  }
}

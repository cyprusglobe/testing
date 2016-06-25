import {
  fetchBalloons,
  fetchBalloonsWithPage
} from '../../api/balloons/payload'
import {AUTH_TOKEN_TYPE, AUTH_TOKEN} from '../../constants/api'
import {
  onBalloonsListReceived,
  onBalloonsListFailed
} from '../../api/balloons/fetch'

import * as types from '../../constants/balloons/actionTypes'

export function fetchAndSetBalloons(page) {
  return function (dispatch) {
    return dispatch(fetchBalloons(page))
  }
}

export function fetchAndSetBalloonsWithPage(page) {
  return function (dispatch) {
    return dispatch(fetchBalloonsWithPage(page))
  }
}


export function fetchStuffs(page) {
  const init = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': AUTH_TOKEN_TYPE + ' ' + AUTH_TOKEN
        }
    }
  return function (dispatch) {
    return fetch(`http://localhost:6543/2016/balloons?page=${page}`, init)
      .then((response) => response.json())
      .then((json) => {
        dispatch(onBalloonsListReceived(json))
      })
      .catch((error) => {
        dispatch(onBalloonsListFailed(error))
      })
  }
}

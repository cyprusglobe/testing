import { AUTH_TOKEN_TYPE, AUTH_TOKEN } from '../constants/api'
import * as types from '../constants/balloonActionTypes'

export function fetchBalloons (page) {
  return {
    type: types.SET_BALLOONS,
    payload: {
      request: {
        url: '/balloons',
        method: 'get',
        params: {
          page: page
        },
        headers: {
          'Authorization': AUTH_TOKEN_TYPE + ' ' + AUTH_TOKEN
        }
      }
    }
  }
}

export function fetchBalloonsWithPage (page) {
  return {
    type: types.SET_BALLOONS_MORE,
    payload: {
      request: {
        url: '/balloons',
        method: 'get',
        params: {
          page: page
        },
        headers: {
          'Authorization': AUTH_TOKEN_TYPE + ' ' + AUTH_TOKEN
        }
      }
    }
  }
}

export function fetchBalloon (id) {
  return {
    type: types.SET_BALLOON,
    payload: {
      request: {
        url: '/balloon/' + id,
        method: 'get',
        headers: {
          'Authorization': AUTH_TOKEN_TYPE + ' ' + AUTH_TOKEN
        }
      }
    }
  }
}

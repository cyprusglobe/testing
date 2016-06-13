import axios from 'axios'
import { URI } from '../constants/api'
import { AUTH_TOKEN_TYPE, AUTH_TOKEN } from '../constants/api'
import * as types from '../constants/balloonActionTypes'

export function fetchBalloons () {
  return {
    type: types.SET_BALLOONS,
    payload: {
      request: {
        url: '/balloons',
        method: 'get',
        headers: {
          'Authorization': AUTH_TOKEN_TYPE + ' ' + AUTH_TOKEN
        }
      }
    }
  }
}

export function fetchBalloonsWithPage (offset) {
  console.log(offset)
  return {
    type: types.SET_BALLOONS_MORE,
    payload: {
      request: {
        url: '/balloons',
        method: 'get',
        params: {
          offset: offset
        },
        headers: {
          'Authorization': AUTH_TOKEN_TYPE + ' ' + AUTH_TOKEN
        }
      }
    }
  }
}

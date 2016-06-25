import { AUTH_TOKEN_TYPE, AUTH_TOKEN } from '../../constants/api'
import * as types from '../../constants/balloon/actionTypes'

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

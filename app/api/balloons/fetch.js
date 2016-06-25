import { AUTH_TOKEN_TYPE, AUTH_TOKEN } from '../../constants/api'
import * as types from '../../constants/balloons/actionTypes'
import * as type from '../../constants/balloon/actionTypes'

export function onBalloonsListReceived (json) {
  return {
    type: types.REQUEST_BALLOONS_LIST_RECEIVED,
    json
  }
}

export function onBalloonDetailReceived (json) {
  return {
    type: type.REQUEST_BALLOONS_DETAIL_RECEIVED,
    json
  }
}

export function onBalloonsListFailed (error) {
  return {
    type: types.REQUEST_BALLOONS_LIST_FAILED,
    error
  }
}

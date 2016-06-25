import * as types from '../constants/balloon/actionTypes'
import merge from 'lodash/merge'
import union from 'lodash/union'

const initialState = {
  result: {
    item: {}
  },
  isLoading: false,
  error: {
    status: 0,
    message: ''
  }
}

export default function balloon(state = initialState, action) {
  switch (action.type) {
    case types.SET_BALLOON:
      return Object.assign({}, state, {
        ...state,
        isLoading: true
      })
    case types.SET_BALLOON_SUCCESS:
      return Object.assign({}, state, {
        result: Object.assign({}, state.result, {
          item: action.payload.data
        }),
        isLoading: false
      })
    case types.SET_BALLOON_FAIL:
      return Object.assign({}, state, {
        result: Object.assign({}, state.result, {
          item: {}
        }),
        isLoading: false,
        error: {
          'status': action.error.status,
          'message': action.error.message
        }
    })
    default :
      return state
  }
}

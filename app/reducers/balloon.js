import * as types from '../constants/balloonActionTypes'
import merge from 'lodash/merge'
import union from 'lodash/union'

const initialState = {
  balloon: {
    data: []
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
        isLoading: true
      })
    case types.SET_BALLOON_SUCCESS:
      return Object.assign({}, state.balloon, {
        balloon: Object.assign({}, state.balloon, {
          data: []
        }),
        isLoading: false
      })
    case types.SET_BALLOON_FAIL:
      return Object.assign({}, state, {
        balloon: Object.assign({}, state.balloon, {
          data: []
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

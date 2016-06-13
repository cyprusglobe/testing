import * as types from '../constants/balloonActionTypes'
import merge from 'lodash/merge'
import union from 'lodash/union'

const initialState = {
  balloons: {
    items: []
  },
  isLoading: false,
  page: 0
}

export default function balloon(state = initialState, action) {
  switch (action.type) {
    case types.SET_BALLOONS:
      return Object.assign({}, state, {
        isLoading: true
      })
    case types.SET_BALLOONS_SUCCESS:
      return Object.assign({}, state, {
        balloons: Object.assign({}, state.balloons, {
          items: action.payload.data
        }),
        isLoading: false
      })
      case types.SET_BALLOONS_MORE:
        console.log(action)
        return Object.assign({}, state, {
          page: action.payload.request.params.offset
        })

    case types.SET_BALLOONS_MORE_SUCCESS:
      console.log(action)
      return Object.assign({}, state, {
        balloons: Object.assign({}, state.balloons, {
          items: [
              ...state.balloons.items,
              ...action.payload.data
            ]
        }),
        isLoading: false,
        page: action.meta.previousAction.payload.request.params.offset
      })
    case types.SET_BALLOONS_FAIL:
      return {
          ...state,
          error: {
            'status': action.error.status,
            'message': action.error.message
          }
      }
    default :
      return state
  }
}

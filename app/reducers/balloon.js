import * as types from '../constants/balloonActionTypes'

const initialState = {
  balloons: [],
  isLoading: false,
  page: 1
}

export default function balloon(state = initialState, action) {
  switch (action.type) {
    case types.SET_BALLOONS:
      return {
          ...state,
          isLoading: true
      }
      case types.SET_BALLOONS_SUCCESS:
      return {
        ...state,
        balloons: action.payload.data,
        isLoading: false
      }
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

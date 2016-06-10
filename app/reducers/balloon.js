import * as actions from '../actions/balloon'

const initialState = {
  balloons: [],
  page: 1
}

export default function balloon (state = initialState, action) {
  switch (action.type) {
    case actions.SET_BALLOONS :
      return {
        ...state,
        balloons: action.balloons
      }
    case actions.SET_CURRENT :
          return {
            ...state,
            current: action.current
          }
    default :
      return state
  }
}
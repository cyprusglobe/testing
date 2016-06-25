import * as types from '../constants/balloon/actionTypes'

const initialState = {
  item: '',
  isLoadingb: false,
}

export default function balloontest(state = initialState, action) {
  switch (action.type) {

    case types.REQUEST_BALLOON_DETAIL:
      console.log('Action', action)
      return {
        item: '',
        isLoadingb: true
      }
    case types.REQUEST_BALLOONS_DETAIL_RECEIVED:
    console.log('Action', action)
      return {
        ...state,
        item: action.json,
        isLoadingb: false
      }
    default :
      return state
  }
}

import * as types from '../constants/balloonActionTypes'
import merge from 'lodash/merge'
import union from 'lodash/union'

const initialState = {
  items: [],
  page_info: {
    current_page: 0,
    total_count: 0,
    number_of_pages: 0
  },
  isLoading: false,
  error: {
    status: 0,
    message: ''
  }
}

export default function balloons(state = initialState, action) {
  switch (action.type) {
    case types.SET_BALLOONS_MORE:
      // console.log(action)
      return Object.assign({}, state, {
        isLoading: true
      })

    case types.SET_BALLOONS_MORE_SUCCESS:
      console.log(action)
      return Object.assign({}, state, {
        items: Object.assign({}, state.items, {
          ...state.items,
          ...action.payload.data.balloons,
        }),
        page_info: {
          current_page: action.payload.data.current_page,
          total_count: action.payload.data.total_count,
          number_of_pages: action.payload.data.number_of_pages
        },
        isLoading: false,

      })
    case types.SET_BALLOONS_MORE_FAIL:
      return {
          ...state,
          balloons: {
            items: []
          },
          isLoading: false,
          error: {
            'status': action.error.status,
            'message': action.error.message
          }
      }
    default :
      return state
  }
}

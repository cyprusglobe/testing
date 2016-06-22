import * as types from '../constants/balloonActionTypes'
import merge from 'lodash/merge'
import union from 'lodash/union'

const initialState = {
  result: {
    items: [],
  },
  page_info: {
    current_page: 0,
    total_count: 0,
    number_of_pages: 0,
    previous_page: 0,
    next_page: 0
  },
  isLoading: false,
  error: {
    status: 0,
    message: ''
  }
}

export default function balloons(state = initialState, action) {
  switch (action.type) {
    case types.SET_BALLOONS:
      return Object.assign({}, state, {
        isLoading: true
      })
    case types.SET_BALLOONS_SUCCESS:
      return Object.assign({}, state, {
        result: Object.assign({}, state.result, {
          items: action.payload.data.balloons
        }),
        isLoading: false
      })

    case types.SET_BALLOONS_FAIL:
      return {
          ...state,
          result: {
            items: []
          },
          isLoading: false,
          error: {
            'status': action.error.status,
            'message': action.error.message
          }
      }
    case types.SET_BALLOONS_MORE:
      return Object.assign({}, state, {
        isLoading: true
      })

    case types.SET_BALLOONS_MORE_SUCCESS:
      console.log(state)
      return Object.assign({}, state, {
        result: Object.assign({}, state.result, {
          items: [
            ...state.result.items,
            ...action.payload.data.balloons
          ]
        }),
        page_info: {
          current_page: action.payload.data.current_page,
          total_count: action.payload.data.total_count,
          number_of_pages: action.payload.data.number_of_pages,
          previous_page: action.payload.data.previous_page,
          next_page: action.payload.data.next_page
        },
        isLoading: false,

      })
    case types.SET_BALLOONS_MORE_FAIL:
      return {
          ...state,
          result: {
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

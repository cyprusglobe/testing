import * as types from '../constants/balloons/actionTypes'

const initialState = {
  items: '',
  isLoading: false,
  page_info: {
    current_page: 0,
    total_count: 0,
    number_of_pages: 0,
    previous_page: 0,
    next_page: 0
  },
}

export default function balloonstest(state = initialState, action) {
  switch (action.type) {

    case types.REQUEST_BALLOONS_LIST:
      return {
        items: '',
        isLoading: true
      }
    case types.REQUEST_BALLOONS_LIST_RECEIVED:
        return Object.assign({}, state, {
          isFetching: false,
          items: [...state.items, ...action.json.balloons],
          isLoading: false,
          page_info: {
            current_page: action.json.current_page,
            total_count: action.json.total_count,
            number_of_pages: action.json.number_of_pages,
            previous_page: action.json.previous_page,
            next_page: action.json.next_page
          }
        })
    case types.REQUEST_BALLOONS_LIST_FAILED:
    console.log(action)
      return {
        items: '',
        error: {
          message: action.error
        },
        isLoading: false
      }
    default :
      return state
  }
}

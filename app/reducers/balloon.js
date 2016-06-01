const initialState = {
  balloons: [],
  page: 1
}

export default function balloons (state = initialState, action) {
  switch (action.type) {
    case 'SET_BALLOONS' :
      return {
        ...state,
        balloons : action.
      }
    default :
      return state
  }
}
import {SET_CURRENT_E, SET_EVENTS} from "../actions/event"

const initialState = {
    events: [],
    page: 1
}

export default function event(state = initialState, action) {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                events: action.events
            }
        case SET_CURRENT_E:
            return {
                ...state,
                current: action.current
            }
        default :
            return state
    }
}
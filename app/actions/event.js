import {fetchEvents} from '../api/schedule'

export const FETCHING_EVENTS = 'FETCHING_EVENTS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const SET_EVENTS = 'SET_EVENTS'
export const SET_CURRENT_E = 'SET_CURRENT_E'

export function fetchingEvent(status) {
    return {
        type: FETCHING_EVENTS,
        fetching: status
    }
}

export function fetchError(error) {
    return {
        type: FETCH_ERROR,
        error: error
    }
}

export function setEvents(data) {
    return {
        type: SET_EVENTS,
        balloons: data,
    }
}

export function setCurrent(store) {
    return {
        type: SET_CURRENT_E,
        current
            :
        store
    }
}

export function fetchAndSetEvents() {
    return function (dispatch, getState) {
        return fetchEvents()
            .then((res) => res.json())
            .then((data) => dispatch(setEvents(data)))
            .catch((err) => dispatch(fetchError(err)))
    }
}

export function setCurrentEvent(store) {
    return function (dispatch) {
        return {event: store}
    }, (err, data) => {
        if (err) return dispatch(fetchError(err))
        dispatch(setCurrent(store))
    }
}
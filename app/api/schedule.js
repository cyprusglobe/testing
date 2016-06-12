import axios from 'axios'
import {URI, AUTH_TOKEN} from '../constants/api'

export function fetchEvents() {
    return axios(URI+'/events', {
        method: "GET",
        dataType: 'json',
        headers: {
            "Authorization": AUTH_TOKEN
        }
    })
}

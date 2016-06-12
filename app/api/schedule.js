import axios from 'axios'
import {BASE_URI} from '../api'

export function fetchEvents() {
    return fetch('http://0.0.0.0:6543/2016/events', {
        method: "GET",
        dataType: 'json',
        headers: {
            "Authorization": 'Baerer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0NjQzNTk0MDUsImdyb3VwIjoiand0Iiwic3ViIjoic2hlbGRvbkBkYXJrYml0cy5uZXQifQ.trDEslamAJShhwtVaeTykfBWjFnbZCRiXjsYDTBsinf1Bvcza6pbBcPEaxuS4gOyByziQuBw7chtipZDcAARRA'
        }
    })
}


import axios from 'axios'
import { BASE_URI } from '../api'

export function fetchBalloons () {
  return fetch('http://api.balloonfiesta.com/2016/balloons', {
    method: "GET",
    dataType: 'json',
    headers : {
      "Authorization": 'Baerer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0NjQzNTk0MDUsImdyb3VwIjoiand0Iiwic3ViIjoic2hlbGRvbkBkYXJrYml0cy5uZXQifQ.trDEslamAJShhwtVaeTykfBWjFnbZCRiXjsYDTBsinf1Bvcza6pbBcPEaxuS4gOyByziQuBw7chtipZDcAARRA'
    }
  })
}

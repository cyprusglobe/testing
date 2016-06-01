import axios from 'axios'

function balloons (token) {
  if(token === null) return {}
  return axios(`${BASE_URI}/api/user/v1/getstatus`, {
    method: "GET",
    headers : {
      "x-stamplay-jwt": token,
      "Content-Type": 'application/json'
    }
  })
}

export default {
  balloons
}
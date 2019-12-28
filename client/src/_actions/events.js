import { GET_STARTTIME, GET_AN_EVENT, POST_NEW_EVENT } from '../config/constanst'
import axios from 'axios'

export const getStartTime = () => {
  return {
    type: GET_STARTTIME,
    payload: axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/events"
    })
  }
}
export const getAnEvent = () => {
  return {
    type: GET_AN_EVENT,
    payload: axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/event/:id"
    })
  }
}
export const postNewContent = () => {
  return {
    type: POST_NEW_EVENT,
    payload: axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/event"
    })
  }
}


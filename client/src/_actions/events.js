import { GET_STARTTIME, GET_AN_EVENT, POST_NEW_EVENT } from '../config/constants'
import axios from 'axios'

export const getStartTime = () => {
  return {
    type: GET_STARTTIME,
    payload: axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/events?start_time=2019-12-30"
    })
  }
}
export const getAnEvent = (event_id) => {
  return {
    type: GET_AN_EVENT,
    payload: axios({
      method: "GET",
      url: `http://localhost:8000/api/v1/event/${event_id}`
    })
  }
}
export const postNewContent = (newContent) => {
  return {
    type: POST_NEW_EVENT,
    payload: axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/event",
      data: newContent
    })
  }
}


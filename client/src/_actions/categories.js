import { GET_ALL_CATEGORIES, GET_ALL_EVENTS_BYCATEGORIES } from '../config/constants'
import axios from 'axios'

export const getCategories = () => {
  return {
    type: GET_ALL_CATEGORIES,
    payload: axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/categories"
    })
  }
}
export const getEventsByCategories = () => {
  return {
    type: GET_ALL_EVENTS_BYCATEGORIES,
    payload: axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/category/:id/events"
    })
  }
}
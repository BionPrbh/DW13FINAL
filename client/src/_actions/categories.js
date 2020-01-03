import { GET_ONE_CATEGORY, GET_ALL_CATEGORIES, GET_ALL_EVENTS_BYCATEGORIES } from '../config/constants'
import axios from 'axios'

export const getCategory = (category_id) => {
  return {
    type: GET_ONE_CATEGORY,
    payload: axios({
      method: "GET",
      url: `http://localhost:8000/api/v1/category/${category_id}`
    })
  }
}

export const getCategories = () => {
  return {
    type: GET_ALL_CATEGORIES,
    payload: axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/categories"
    })
  }
}
export const getEventsByCategories = (category_id) => {
  return {
    type: GET_ALL_EVENTS_BYCATEGORIES,
    payload: axios({
      method: "GET",
      url: `http://localhost:8000/api/v1/category/${category_id}/events`
    })
  }
}
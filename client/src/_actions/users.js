import { LOGIN, REGISTER, GET_A_USER, GET_USER_FAVORITED } from '../config/constanst'
import axios from 'axios'

export const login = () => {
  return {
    type: LOGIN,
    payload: axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/login"
    })
  }
}
export const register = () => {
  return {
    type: REGISTER,
    payload: axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/register"
    })
  }
}
export const getUser = () => {
  return {
    type: GET_A_USER,
    payload: axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/profile/:id"
    })
  }
}
export const getUserFavorited = () => {
  return {
    type: GET_USER_FAVORITED,
    payload: axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/user/:id/favorites"
    })
  }
}

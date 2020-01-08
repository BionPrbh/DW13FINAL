import { LOGIN, REGISTER, GET_A_USER, GET_USER_FAVORITED } from '../config/constants'
import axios from 'axios'
const Token = localStorage.getItem("_AUTH_TOKEN")

export const login = (userData) => {
  return {  
    type: LOGIN,
    payload: axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/login",
      data: userData
    })
  }
}
export const register = (userData) => {
  return {
    type: REGISTER,
    payload: axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/register",
      data: userData
    })
  }
}
export const getUser = () => {
  return {
    type: GET_A_USER,
    payload: axios({
      method: "GET",
      headers:{"Authorization":"Bearer "+Token},
      url: `http://localhost:8000/api/v1/profile`
    })
  }
}
export const getUserFavorited = () => {  
  return {
    type: GET_USER_FAVORITED,
    payload: axios({
      method: "GET",
      headers:{"Authorization":"Bearer "+Token},
      url: `http://localhost:8000/api/v1/user/favorites`
    })
  }
}

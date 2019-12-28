import { POST_ORDER, PUT_ORDER, GET_APPROVED } from '../config/constanst'
import axios from 'axios'

export const postOrder = () => {
  return {
    type: POST_ORDER,
    payload: axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/order"
    })
  }
}
export const putOrder = () => {
  return {
    type: PUT_ORDER,
    payload: axios({
      method: "PUT",
      url: "http://localhost:8000/api/v1/order/:id"
    })
  }
}
export const getApproved = () => {
  return {
    type: GET_APPROVED,
    payload: axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/orders"
    })
  }
}
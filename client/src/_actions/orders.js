import { POST_ORDER, PUT_ORDER, GET_APPROVED } from '../config/constants'
import axios from 'axios'

export const postOrder = (newOrder) => {
  return {
    type: POST_ORDER,
    payload: axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/order",
      data: newOrder
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
      url: "http://localhost:8000/api/v1/orders?status=approved"
    })
  }
}

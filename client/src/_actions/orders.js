import { POST_ORDER, PUT_ORDER, GET_ALL_PENDING, GET_TOBEPAID, GET_APPROVED } from '../config/constants'
import axios from 'axios'
const Token = localStorage.getItem("_AUTH_TOKEN")


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
export const putOrder = (order_id) => {
  return {
    type: PUT_ORDER,
    payload: axios({
      method: "PUT",
      headers:{"Authorization":"Bearer "+Token},
      url: `http://localhost:8000/api/v1/order/${order_id}`
    })
  }
}
export const getAllPending = () => {
  return {
    type: GET_ALL_PENDING,
    payload: axios({
      method: "GET",
      headers:{"Authorization":"Bearer "+Token},
      url: "http://localhost:8000/api/v1/orders?status=pending"
    })
  }
}
export const getToBePaid = (order_id) => {
  return {
    type: GET_TOBEPAID,
    payload: axios({
      method: "GET",
      headers:{"Authorization":"Bearer "+Token},
    url: `http://localhost:8000/api/v1//order/${order_id}`
    })
  }
}
export const getApproved = () => {
  return {
    type: GET_APPROVED,
    payload: axios({
      method: "GET",
      headers:{"Authorization":"Bearer "+Token},
      url: "http://localhost:8000/api/v1/orders?status=approved"
    })
  }
}

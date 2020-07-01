import axios from "axios";
import {GET_ORDER_DETAILS, GET_ORDER_DETAIL, GET_ERRORS } from "./types";

export const getAllOrderDetail = () => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/api/v1/orderDetails/all`);
  dispatch({
    type: GET_ORDER_DETAILS,
    payload: res.data
  })
}

export const getOrderDetailByCustomer = (id) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:8080/api/v1/orderDetails/${id}`
  );
  dispatch({
    type: GET_ORDER_DETAIL,
    payload: res.data,
  });
};

export const updateOrderDetail = (id, orderDetail, history) => async (dispatch) => {
  try {
    if (window.confirm("Confirm Order?")) {
      await axios.post(
        `http://localhost:8080/api/v1/orderDetails/${id}`,
        orderDetail
      );
    }
    history.push("/")
    history.go()
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const updateOrderDetailForEmployee = (id, orderDetail,history) => async (dispatch) => {
  try {
    if (window.confirm("Confirm Order?")) {
      await axios.post(
        `http://localhost:8080/api/v1/orderDetails/${id}`,
        orderDetail
      );
    }
    history.go("/employeeConfirm")
    history.go()
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const createOrderItems = (orderItems) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:8080/api/v1/orderItems`, orderItems);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

// export const updateOrderDetail = () => async dispatch => {

// }

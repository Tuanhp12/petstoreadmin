import axios from "axios";
import { GET_CATEGORIES, GET_CATEGORY } from "./types";

export const getCategories = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/v1/categories/all");
  dispatch({
    type: GET_CATEGORIES,
    payload: res.data,
  });
};

export const getCategory = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:8080/api/v1/categories/${id}`);
  console.log(res.data);
  dispatch({
    type: GET_CATEGORY,
    payload: res.data
  })
}
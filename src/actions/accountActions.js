import axios from "axios";
import {GET_ACCOUNTS} from "./types";

export const getAccounts = () => async (dispatch) => {
    const res = await axios.get(`http://localhost:8080/api/v1/account/all`);
    dispatch({
      type: GET_ACCOUNTS,
      payload: res.data
    })
  }
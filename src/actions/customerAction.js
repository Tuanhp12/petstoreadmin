import axios from 'axios'
import {GET_ERRORS, GET_CUSTOMER, GET_CUSTOMERS,DELETE_CUSTOMER} from "./types"

export const createCustomer = (customer, history,customerIdentifier,takeItemCart ) => async dispatch => {
    try{
        await axios.post("http://localhost:8080/api/customer/v1", customer)
        // console.log(customerIdentifier)
        // console.log(takeItemCart)
        history.push({
            pathname:'/confirm',
            search: `?cusident=${customerIdentifier}`,
            state: { takeItemCart1 : takeItemCart}
          });
        // history.go()       
    } catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

export const getCustomers = () => async dispatch =>{
    const res = await axios.get("http://localhost:8080/api/customer/v1/all");
    console.log(res.data)
    dispatch({
        type: GET_CUSTOMERS,
        payload: res.data
    })
}

export const getCustomer = (id) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/customer/v1/${id}`);
        dispatch({
            type: GET_CUSTOMER,
            payload: res.data
        })
    } catch (error) {
        // history.push("/user")
    }
   
}

export const customerDelete = (id, history) => async dispatch => {
    if (
      window.confirm(
        "Has some error with the order?"
      )
    ) {
        console.log(id)
      await axios.delete(`http://localhost:8080/api/customer/v1/${id}`);
      history.push({
        pathname:'/',
        
      });
      dispatch({
        type: DELETE_CUSTOMER,
        payload: id
      });
    }
  };
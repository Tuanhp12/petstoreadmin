import axios from 'axios'
import {GET_PRODUCT, GET_CATEGORY, GET_ERRORS} from './types'

export const getProducts = category_id => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8080/api/v1/categories/${category_id}`)
        dispatch({
            type: GET_CATEGORY,
            payload:res.data
        })
    }catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          });
    }
}

export const getProduct = (category_id, product_id, history) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8080/api/v1/products/${category_id}/${product_id}`)
        dispatch({
            type:GET_PRODUCT,
            payload:res.data
        })
    }catch(err){
        history.push("/dashboard")
    }
}

export const createProduct = (category_id,productRequest,history) => async dispatch => {
    try{
        await axios.post(`http://localhost:8080/api/v1/products/${category_id}`, productRequest)
        history.push('/admin/listProduct');
        history.go()       
    } catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}
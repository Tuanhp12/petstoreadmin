import {GET_ORDER_DETAILS, GET_ORDER_DETAIL} from '../actions/types'

const initialState = {
    orderDetails: [],
    orderDetail: {}
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_ORDER_DETAILS:
            return {
                ...state,
                orderDetails: action.payload
            }

        case GET_ORDER_DETAIL: 
            // console.log(action.payload)
            return{
                ...state,
                orderDetail: action.payload
            }
        default:
            return state;    
    }
}
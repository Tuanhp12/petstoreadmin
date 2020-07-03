import {GET_PRODUCTS} from '../actions/types'

const initialState = {
   products: [],
   product:{}
}

export default function(state = initialState, action){
    switch(action.type){

        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        default:
            return state;    
    }
}
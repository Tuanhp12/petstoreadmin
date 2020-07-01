import axios from 'axios'

export const sendEmail = (email, feedback ) => async dispatch => {
    try{
        await axios.post(`http://localhost:8080/feedback/${email}`, feedback)   
    } catch(err){
       
    }
}
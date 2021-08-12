import axios from 'axios'
import {FETCH_NEWPRODUCT_REQUEST,
        FETCH_NEWPRODUCT_SUCCESS,
        FETCH_NEWPRODUCT_FAILURE,
        FETCH_MENUID_REQUEST,
        FETCH_MENUID_SUCCESS,
        FETCH_MENUID_FAILURE} from './NewproductTypes'

function listNewProducts () {
    return function (dispatch){
       dispatch({
           type:FETCH_NEWPRODUCT_REQUEST
       })

       axios.get('newproduct').then(response =>{
           dispatch({
               type:FETCH_NEWPRODUCT_SUCCESS,
               payload:response.data
           })
       }).catch(error =>{
           dispatch({
             type:FETCH_NEWPRODUCT_FAILURE,
             payload:error.response
           })
       })
    }
}

function menuId(){
    return function (dispatch){
        dispatch({
            type:FETCH_MENUID_REQUEST
        })

        axios.get('menuid').then(response=>{
            console.log(response);
            dispatch({
                type:FETCH_MENUID_SUCCESS,
                payload:response.data
            })
        }).catch(error=>{
            dispatch({
                type:FETCH_MENUID_FAILURE,
                payload:error.response
            })
        })
    }
}

export {listNewProducts,menuId};

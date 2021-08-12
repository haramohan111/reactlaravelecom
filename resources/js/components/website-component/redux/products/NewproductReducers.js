import {FETCH_NEWPRODUCT_REQUEST,
    FETCH_NEWPRODUCT_SUCCESS,
    FETCH_NEWPRODUCT_FAILURE,
    FETCH_MENUID_REQUEST,
    FETCH_MENUID_SUCCESS,
    FETCH_MENUID_FAILURE } from './NewproductTypes';

    
 const initialState={
     newproduct:[],
     menuid:[],
     loading:false,
     success_message:"",
     error_message:""
 }   


 const newProductReducer = function(state=initialState,action){
    // console.log(action.payload);
       switch(action.type){
           case FETCH_NEWPRODUCT_REQUEST:
               return{
                   ...state,
                   loading:true
               }

            case FETCH_NEWPRODUCT_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    newProduct:action.payload,
                    success_message:action.payload,
                    error_message:""
                }
                
            case FETCH_NEWPRODUCT_FAILURE:
                return {
                    ...state,
                    loading:true,
                    newProduct:[],
                    error_message:action.error,
                }
            case FETCH_MENUID_REQUEST:
                return{
                    ...state,
                    loading:true
                }  
            case FETCH_MENUID_SUCCESS:
                return{
                    ...state,
                    menuid:action.payload,
                    success_message:action.payload.success,
                    error_message:"",
                    loading:false,

                }  
            case FETCH_MENUID_FAILURE:
                return{
                    ...state,
                    menuid:[],
                    error_message:action.error
                }        
            default: return state
       }
 }

 export default newProductReducer;

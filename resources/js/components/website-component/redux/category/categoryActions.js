import axios from 'axios'
import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE
} from './categoryTypes'

export const fetchCategory = () => {
  return (dispatch) => {
    //dispatch(fetchCategoryRequest())
    axios
      .get('menu')
      .then(response => {
        // response.data is the users
        const category = response.data
       // console.log(category);
        dispatch(fetchCategorySuccess(category.menu_result))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchCategoryFailure(error.message))
      })
  }
}

export const fetchCategoryRequest = () => {
  return {
    type: FETCH_CATEGORY_REQUEST
  }
}

export const fetchCategorySuccess = category => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: category
  }
}

export const fetchCategoryFailure = error => {
  return {
    type: FETCH_CATEGORY_FAILURE,
    payload: error
  }
}
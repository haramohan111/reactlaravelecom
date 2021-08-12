import { combineReducers } from 'redux'

import categoryReducer from './category/categoryReducer'
import newProductReducer from './products/NewproductReducers'

const rootReducer = combineReducers({
  category: categoryReducer,
  newproducts:newProductReducer
})

export default rootReducer
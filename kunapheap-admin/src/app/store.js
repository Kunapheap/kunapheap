import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user/userSlice' 
import categoryReducer from './user/categorySlide'
import productReducer from './user/productSlide'

export default configureStore({
    reducer : {
        user : userReducer,
        category : categoryReducer,
        product : productReducer
    }
})
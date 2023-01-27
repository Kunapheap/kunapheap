import {configureStore} from '@reduxjs/toolkit'
import userReducer from './user/userSlice' 
import categoryReducer from './user/categorySlide'
import productReducer from './user/productSlide'
import itemReducer from './user/itemSlide'
import itemArrReducer from './user/itemArrSlice'

export default configureStore({
    reducer : {
        user : userReducer,
        category : categoryReducer,
        product : productReducer,
        item : itemReducer,
        itemArr : itemArrReducer

    }
})
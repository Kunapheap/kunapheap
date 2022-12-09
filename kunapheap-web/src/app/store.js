import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import categoryReducer from './slice/categorySlice'
import productReducer from './slice/productSlide'
import viewProductReducer from './slice/viewProductSlide'

export const store = configureStore({
    reducer : {
        user : userReducer,
        category : categoryReducer,
        product : productReducer,
        view_product : viewProductReducer
    }
})

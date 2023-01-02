import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import categoryReducer from './slice/categorySlice'
import productReducer from './slice/productSlide'
import viewProductReducer from './slice/viewProductSlide'
import newArrivalProduct from './slice/newArrivalProduct'
import newArrivalPage from './slice/newArrivalPage'

export const store = configureStore({
    reducer : {
        user : userReducer,
        category : categoryReducer,
        product : productReducer,
        view_product : viewProductReducer,
        new_arrival_product : newArrivalProduct,
        new_arrival_page : newArrivalPage
    }
})

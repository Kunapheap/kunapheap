import {createSlice} from '@reduxjs/toolkit'
import { Action } from '@remix-run/router'

const productSlide = createSlice ({
    name : 'product',
    initialState : {
        value : []
    },
    reducers : {
        setProduct : (state,action) => {
            state.value = action.payload
        }
    }

})

export const {setProduct} = productSlide.actions;
export default productSlide.reducer
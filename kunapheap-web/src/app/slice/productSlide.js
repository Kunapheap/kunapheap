import {createSlice} from '@reduxjs/toolkit'

const productSlide = createSlice ({
    name : 'product',
    initialState : {
        value : [],
    },
    reducers : {
        setProduct : (state,action) => {
            state.value = action.payload
        }
    }

})

export const {setProduct} = productSlide.actions;
export default productSlide.reducer
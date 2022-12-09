import {createSlice} from '@reduxjs/toolkit'


const viewPoductSlide = createSlice({
    name : 'view_product',
    initialState : {
        value : undefined
    },
    reducers : {
        setViewProduct : (state,action) => {
            state.value = action.payload
        }
    }
})

export const {setViewProduct} = viewPoductSlide.actions

export default viewPoductSlide.reducer
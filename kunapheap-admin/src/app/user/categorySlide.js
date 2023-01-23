import { createSlice } from "@reduxjs/toolkit";

const categorySlide = createSlice ({
    name : "category",
    initialState : {
        value : []
    },
    reducers : {
        setCategory : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setCategory} = categorySlide.actions

export default categorySlide.reducer
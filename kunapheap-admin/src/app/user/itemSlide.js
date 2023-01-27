import { createSlice } from "@reduxjs/toolkit";

const itemSlide = createSlice({
    name : 'item',
    initialState : {
        value : {}
    },
    reducers : {
        setItem : (state , action) => {
            state.value = action.payload;
        }
    }
})

export const {setItem} = itemSlide.actions

export default itemSlide.reducer
import { createSlice } from "@reduxjs/toolkit";


const itemArrSlide = createSlice({
    name : 'itemArr',
    initialState : {
        value : []
    },
    reducers : {
        setItemArr : (state , action) => {
            state.value = action.payload;
        }
    }
})

export const {setItemArr} = itemArrSlide.actions

export default itemArrSlide.reducer
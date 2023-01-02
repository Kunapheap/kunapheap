import { createSlice } from "@reduxjs/toolkit";

const newArrivalProductSlice = createSlice({
    name : 'new_arrival_product',
    initialState : {
        value : []
    },
    reducers : {
        setNewArrivalProduct : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setNewArrivalProduct} = newArrivalProductSlice.actions
export default newArrivalProductSlice.reducer

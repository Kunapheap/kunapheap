import { createSlice } from "@reduxjs/toolkit";

const newArrivalPageSlice = createSlice({
    name : 'new_arrival_page',
    initialState : {
        value : []
    },
    reducers : {
        setNewArrivalPage : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setNewArrivalPage} = newArrivalPageSlice.actions
export default newArrivalPageSlice.reducer
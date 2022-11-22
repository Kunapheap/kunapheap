import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice ({
    name : 'user',
    initialState : {
        value : {}
    },
    reducers : {
        setUser : (state, actions) => {
            state.value = actions.payload
        }
    }
})

export const {setUser} = userSlice.actions

export default userSlice.reducer
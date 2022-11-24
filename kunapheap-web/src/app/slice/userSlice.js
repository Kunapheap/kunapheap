import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice ({
    name : 'user',
    initialState : {
        value : {
            user_username : 'Hello',
            user_password : '12345'
        }
    },
    reducers : {
        setUser : (state,action) =>{
            state.value = action.payload
        }
    }

})

//export action
export const {setUser} = userSlice.actions

//export reduce
export default userSlice.reducer
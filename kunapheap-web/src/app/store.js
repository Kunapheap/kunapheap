import {configureStore} from '@reduxjs/toolkit'
import userReduce from './slice/userSlice'

export const store = configureStore({
    reducer : {
        user : userReduce
    }
})

import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import wishSlice from '../features/wishSlice'


export const store = configureStore({
    reducer:{
        AllCart: cartSlice,
        AllItem: wishSlice
    }
})
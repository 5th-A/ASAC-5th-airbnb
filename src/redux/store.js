import { configureStore } from '@reduxjs/toolkit'
import guestCountReducer from '../redux/slices/guestCountSlice'

const store = configureStore({
  reducer: {
    guestCount: guestCountReducer,
  },
})

export default store

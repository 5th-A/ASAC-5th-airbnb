import { configureStore } from '@reduxjs/toolkit'
import guestCountReducer from '../redux/slices/guestCountSlice'
import calendarReducer from './slices/calendarSlice'

const store = configureStore({
  reducer: {
    guestCount: guestCountReducer,
    setCalendar: calendarReducer,
  },
})

export default store

import { createSlice } from '@reduxjs/toolkit'

const guestCountSlice = createSlice({
  name: 'guestCount',
  initialState: {
    adults: 0,
    teens: 0,
    kids: 0,
    pets: 0,
  },
  reducers: {
    increment: (state, action) => {
      //increment(param)에서 param이 action.payload
      const type = action.payload
      if (state[type] !== undefined) {
        state[type] += 1
      }
    },
    decrement: (state, action) => {
      const type = action.payload
      if (state[type] !== undefined && state[type] > 0) {
        state[type] -= 1
      }
    },
    resetGuest: (state) => {
      state.adults = 1
      state.teens = 0
      state.kids = 0
      state.pets = 0
    },
  },
})

export const { increment, decrement, resetGuest } = guestCountSlice.actions
export default guestCountSlice.reducer

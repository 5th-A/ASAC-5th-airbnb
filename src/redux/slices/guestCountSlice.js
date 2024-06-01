import { createSlice } from '@reduxjs/toolkit'

const guestCountSlice = createSlice({
  name: 'guestCount',
  initialState: {
    adults: 1,
    teens: 0,
    kids: 0,
    pets: 0,
  },
  reducers: {
    increment: (state, action) => {
      const category = action.payload
      if (state[category] !== undefined) {
        state[category] += 1
      }
    },
    decrement: (state, action) => {
      const category = action.payload
      if (state[category] !== undefined && state[category] > 0) {
        state[category] -= 1
      }
    },
  },
})

export const { increment, decrement } = guestCountSlice.actions
export default guestCountSlice.reducer

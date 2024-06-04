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
      //increment(param)에서 param이 action.payload
      const type = action.payload
      if (state[type] !== undefined) {
        state[type] += 1
      }
    },
    decrement: (state, action) => {
      const type = action.payload
      if (type === 'adults') {
        //성인은 반드시 1명 이상 설정
        if (state.adults > 1) {
          state[type] -= 1
        }
      } else if (state[type] !== undefined && state[type] > 0) {
        state[type] -= 1
      }
    },
  },
})

export const { increment, decrement } = guestCountSlice.actions
export default guestCountSlice.reducer

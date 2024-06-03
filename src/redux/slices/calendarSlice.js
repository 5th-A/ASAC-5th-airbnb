import { createSlice } from '@reduxjs/toolkit'

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    selectedStartDate: null,
    selectedEndDate: null,
    selectedDatesText: '여행 날짜를 입력하여 정확한 요금을 확인하세요.',
  },
  reducers: {
    setSelectedStartDate: (state, action) => {
      state.selectedStartDate = action.payload
    },
    setSelectedEndDate: (state, action) => {
      state.selectedEndDate = action.payload
    },
    setSelectedDatesText: (state, action) => {
      state.selectedDatesText = action.payload
    },
    resetDates: (state) => {
      state.selectedStartDate = null
      state.selectedEndDate = null
      state.selectedDatesText = '여행 날짜를 입력하여 정확한 요금을 확인하세요.'
    },
  },
})

export const { setSelectedStartDate, setSelectedEndDate, setSelectedDatesText, resetDates } =
  calendarSlice.actions
export default calendarSlice.reducer

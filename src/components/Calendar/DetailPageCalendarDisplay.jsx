'use client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CalendarContainer from './CalendarContainer'
import {
  setSelectedStartDate,
  setSelectedEndDate,
  setSelectedDatesText,
  resetDates,
} from '@/redux/slices/calendarSlice'

const DetailPageCalendarDisplay = () => {
  const dispatch = useDispatch()
  const { selectedStartDate, selectedEndDate, selectedDatesText } = useSelector(
    (state) => state.setCalendar,
  )
  const location = 'Hwacheon-myeon, Hongcheon-gun'
  const [displayText, setDisplayText] = useState(location)

  const formatDate = (date) => {
    const d = new Date(date)
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`
  }

  const calculateNights = (start, end) => {
    const msInDay = 24 * 60 * 60 * 1000
    return Math.round((end - start) / msInDay)
  }

  useEffect(() => {
    if (selectedStartDate && selectedEndDate) {
      const nights = calculateNights(selectedStartDate, selectedEndDate)
      setDisplayText(`${location}에서 ${nights}박`)
      const startDate = new Date(selectedStartDate)
      const endDate = new Date(selectedEndDate)
      dispatch(setSelectedDatesText(`${formatDate(startDate)} - ${formatDate(endDate)}`))
    } else if (selectedStartDate) {
      dispatch(setSelectedDatesText('체크아웃 날짜를 선택해주세요.'))
      dispatch(setSelectedDatesText(formatDate(selectedStartDate)))
    } else {
      dispatch(setSelectedDatesText(location))
      dispatch(setSelectedDatesText('여행 날짜를 입력하여 정확한 요금을 확인하세요.'))
    }
  }, [selectedStartDate, selectedEndDate, location, dispatch])

  return (
    <div className='p-4 w-full'>
      <div className='mb-4 w-full flex-grow justify-between'>
        <h1 className='font-bold pl-10'>{displayText}</h1>
        <p className='pl-10 pt-1'>{selectedDatesText}</p>
      </div>
      <CalendarContainer
        visibleCalendars={3}
        selectedStartDate={selectedStartDate}
        setSelectedStartDate={(date) => dispatch(setSelectedStartDate(date))}
        selectedEndDate={selectedEndDate}
        setSelectedEndDate={(date) => dispatch(setSelectedEndDate(date))}
      />
      <button
        onClick={() => {
          dispatch(resetDates())
        }}
        className=''
      >
        날짜 지우기
      </button>
    </div>
  )
}

export default DetailPageCalendarDisplay

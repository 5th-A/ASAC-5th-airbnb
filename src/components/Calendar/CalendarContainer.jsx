/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import CalendarComponent from './CalendarComponent'

const CalendarContainer = ({ visibleCalendars = 3 }) => {
  const today = new Date()
  const fiveDaysLater = new Date(today)
  fiveDaysLater.setDate(today.getDate() + 5)

  const [selectedStartDate, setSelectedStartDate] = useState(today.getTime())
  const [selectedEndDate, setSelectedEndDate] = useState(fiveDaysLater.getTime())
  const [displayText, setDisplayText] = useState('여행 날짜를 입력하여 정확한 요금을 확인하세요.')

  const currentDate = new Date()
  const [baseMonth, setBaseMonth] = useState(currentDate.getMonth())
  const [baseYear, setBaseYear] = useState(currentDate.getFullYear())
  const [calendarsToShow, setCalendarsToShow] = useState(visibleCalendars)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setCalendarsToShow(1)
      } else if (window.innerWidth <= 975) {
        setCalendarsToShow(2)
      } else {
        setCalendarsToShow(visibleCalendars)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // 초기 호출

    return () => window.removeEventListener('resize', handleResize)
  }, [visibleCalendars])

  const handleClearDates = () => {
    setSelectedStartDate(null)
    setSelectedEndDate(null)
    setDisplayText('')
  }

  const handlePreviousMonth = () => {
    setBaseMonth((prev) => (prev === 0 ? 11 : prev - 1))
    if (baseMonth === 0) {
      setBaseYear((prev) => prev - 1)
    }
  }

  const handleNextMonth = () => {
    setBaseMonth((prev) => (prev === 11 ? 0 : prev + 1))
    if (baseMonth === 11) {
      setBaseYear((prev) => prev + 1)
    }
  }

  const getAdjustedMonth = (offset) => {
    const newMonth = baseMonth + offset
    if (newMonth > 11) {
      return newMonth - 12
    }
    if (newMonth < 0) {
      return newMonth + 12
    }
    return newMonth
  }

  const getAdjustedYear = (offset) => {
    const newMonth = baseMonth + offset
    if (newMonth > 11) {
      return baseYear + 1
    }
    if (newMonth < 0) {
      return baseYear - 1
    }
    return baseYear
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return `${year}년 ${month}월 ${day}일`
  }

  const calculateDateDifference = (startDate, endDate) => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate - startDate)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    }
    return 0
  }

  useEffect(() => {
    if (selectedStartDate && selectedEndDate) {
      const start = formatDate(selectedStartDate)
      const end = formatDate(selectedEndDate)
      setDisplayText(`${start} ~ ${end}`)
      console.log(`Selected Period: ${start} to ${end}`)
    } else {
      setDisplayText('여행 날짜를 입력하여 정확한 요금을 확인하세요.')
    }
  }, [selectedStartDate, selectedEndDate])

  const location = { location: 'Hwachon-myeon, Hongcheon-gun' }
  return (
    <div className='mx-20'>
      <div className='px-6'>
        <div className='text-lg px-6 font-bold'>
          {location.location + '에서 '}
          {selectedStartDate &&
            selectedEndDate &&
            calculateDateDifference(selectedStartDate, selectedEndDate) + '박'}
        </div>
        <div className='font-semi-bold text-lg px-6 text-[75%] text-gray-600'>{displayText}</div>
        <div className='inline-flex items-center w-full relative'>
          {Array.from({ length: calendarsToShow }).map((_, index) => (
            <div
              className='w-full max-w-xs p-6 bg-white flex flex-col min-h-[400px] relative'
              key={index}
            >
              {index === 0 && (
                <div
                  className='absolute top-[9%] left-[9%] cursor-pointer text-lg font-bold p-2 user-select-none transform -translate-y-1/2 z-10'
                  onClick={handlePreviousMonth}
                >
                  &lt;
                </div>
              )}
              <CalendarComponent
                startMonth={getAdjustedMonth(index)}
                startYear={getAdjustedYear(index)}
                selectedStartDate={selectedStartDate}
                selectedEndDate={selectedEndDate}
                setSelectedStartDate={setSelectedStartDate}
                setSelectedEndDate={setSelectedEndDate}
                handlePreviousMonth={handlePreviousMonth}
                handleNextMonth={handleNextMonth}
              />
              {index === calendarsToShow - 1 && (
                <div
                  className='absolute top-[9%] right-[5%] cursor-pointer text-lg font-bold p-2 user-select-none transform -translate-y-1/2 z-10 nextButton'
                  onClick={handleNextMonth}
                >
                  &gt;
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='flex justify-end items-center w-full mb-2 mt-4'>
          <button className='text-black:500 hover:' onClick={handleClearDates}>
            날짜 지우기
          </button>
        </div>
      </div>
    </div>
  )
}

export default CalendarContainer

/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import CalendarComponent from './CalendarComponent'

const CalendarContainer = ({
  visibleCalendars = 3, // 기본값을 3으로 설정
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
}) => {
  const currentDate = new Date()
  const [baseMonth, setBaseMonth] = useState(currentDate.getMonth())
  const [baseYear, setBaseYear] = useState(currentDate.getFullYear())
  const [calendarsToShow, setCalendarsToShow] = useState(visibleCalendars)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 655) {
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

  return (
    <div className='w-full relative'>
      {Array.from({ length: calendarsToShow }).map((_, index) => (
        <div
          className='inline-block align-top w-full max-w-xs p-6 bg-white min-h-[400px] relative'
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
  )
}

export default CalendarContainer

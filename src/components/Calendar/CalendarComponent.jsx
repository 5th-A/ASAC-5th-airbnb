/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

const CalendarComponent = ({
  startMonth,
  startYear,
  selectedStartDate,
  selectedEndDate,
  setSelectedStartDate,
  setSelectedEndDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(startMonth)
  const [currentYear, setCurrentYear] = useState(startYear)

  useEffect(() => {
    setCurrentMonth(startMonth)
    setCurrentYear(startYear)
  }, [startMonth, startYear])

  const handleDateClick = (day) => {
    const date = new Date(currentYear, currentMonth, day).getTime()
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(date)
      setSelectedEndDate(null)
    } else if (selectedStartDate && !selectedEndDate) {
      if (date > selectedStartDate) {
        setSelectedEndDate(date)
      } else {
        setSelectedStartDate(date)
        setSelectedEndDate(null)
      }
    }
  }

  const renderDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

    const weeks = []
    let days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<td key={`empty-${i}`} className='bg-transparent'></td>)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i).getTime()
      const isSelectedStart = date === selectedStartDate
      const isSelectedEnd = date === selectedEndDate
      const isInRange =
        selectedStartDate && selectedEndDate && date > selectedStartDate && date < selectedEndDate

      days.push(
        <td
          key={i}
          className={`w-1/7 h-10 text-center align-middle cursor-pointer border-none ${
            isSelectedStart
              ? 'bg-gray-800 text-white'
              : isSelectedEnd
                ? 'bg-gray-800 text-white'
                : isInRange
                  ? 'bg-gray-200'
                  : 'bg-transparent'
          }`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </td>,
      )

      if ((i + firstDayOfMonth) % 7 === 0 || i === daysInMonth) {
        weeks.push(<tr key={`week-${i}`}>{days}</tr>)
        days = []
      }
    }

    return weeks
  }

  const monthNames = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ]

  return (
    <div className='flex flex-col items-center relative w-full'>
      <div className='flex flex-col items-center relative w-full'>
        <div className='font-bold text-lg mb-2'>
          {currentYear}년 {monthNames[currentMonth]}
        </div>
        <table className='w-full table-fixed border-collapse'>
          <thead>
            <tr className='week'>
              <th className='w-1/7'>일</th>
              <th className='w-1/7'>월</th>
              <th className='w-1/7'>화</th>
              <th className='w-1/7'>수</th>
              <th className='w-1/7'>목</th>
              <th className='w-1/7'>금</th>
              <th className='w-1/7'>토</th>
            </tr>
          </thead>
          <tbody>{renderDays()}</tbody>
        </table>
      </div>
    </div>
  )
}

export default CalendarComponent

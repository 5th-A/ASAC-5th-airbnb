import { useState, useEffect } from 'react'
import CalendarContainer from './CalendarContainer'

const DetailPageCalendarDisplay = () => {
  const location = 'Hwacheon-myeon, Hongcheon-gun'
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)
  const [displayText, setDisplayText] = useState(location)
  const [selectedDatesText, setSelectedDatesText] = useState(
    '여행 날짜를 입력하여 정확한 요금을 확인하세요.',
  )

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
      setSelectedDatesText(`${formatDate(startDate)} - ${formatDate(endDate)}`)
      console.log(
        `Selected Period: ${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`,
      )
    } else if (selectedStartDate) {
      setDisplayText('체크아웃 날짜를 선택해주세요.')
      setSelectedDatesText(formatDate(selectedStartDate))
    } else {
      setDisplayText(location)
      setSelectedDatesText('여행 날짜를 입력하여 정확한 요금을 확인하세요.')
    }
  }, [selectedStartDate, selectedEndDate, location])

  return (
    <div className='p-4'>
      <div className='mb-4'>
        <h1 className='font-bold pl-10'>{displayText}</h1>
        <p className='pl-10 pt-1'>{selectedDatesText}</p>
      </div>
      <CalendarContainer
        visibleCalendars={3}
        selectedStartDate={selectedStartDate}
        setSelectedStartDate={setSelectedStartDate}
        selectedEndDate={selectedEndDate}
        setSelectedEndDate={setSelectedEndDate}
      />
      <button
        onClick={() => {
          setSelectedStartDate(null)
          setSelectedEndDate(null)
          setDisplayText('')
          setSelectedDatesText('여행 날짜를 입력하여 정확한 요금을 확인하세요.')
        }}
        className=''
      >
        날짜 지우기
      </button>
    </div>
  )
}

export default DetailPageCalendarDisplay

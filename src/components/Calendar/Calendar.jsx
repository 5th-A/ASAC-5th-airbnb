import { useState } from 'react'
import CalendarContainer from './CalendarContainer'

// * CalenderContainer를 이용한 예시 코드
const Calendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)

  return (
    <div className='p-4'>
      <CalendarContainer
        visibleCalendars={2}
        selectedStartDate={selectedStartDate}
        setSelectedStartDate={setSelectedStartDate}
        selectedEndDate={selectedEndDate}
        setSelectedEndDate={setSelectedEndDate}
      />
    </div>
  )
}

export default Calendar

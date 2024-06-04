import React from 'react'
import cities from '@/data/cities.json'
import CalendarContainer from '@/components/Calendar/CalendarContainer'
import GuestContent from '@/components/SearchBar/MainSearchBar/GuestContent'

const WhereContent = ({ onSelectCity }) => (
  <div className='p-4'>
    <div className='text-neutral-800 text-sm font-bold mb-2'>한국</div>
    <div className='grid grid-cols-4 gap-2'>
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => onSelectCity(city.name)}
          className='px-4 py-2 border border-gray-300 rounded-full text-sm text-neutral-800 hover:bg-gray-200'
        >
          {city.name}
        </button>
      ))}
    </div>
  </div>
)

const Dropdown = ({
  isOpen,
  type,
  onSelectCity,
  setSelectedStartDate,
  setSelectedEndDate,
  selectedStartDate,
  selectedEndDate,
  guestCounts,
  dispatch,
}) => {
  if (!isOpen) return null

  let content
  switch (type) {
    case 'where':
      content = <WhereContent onSelectCity={onSelectCity} />
      break
    case 'checkin':
    case 'checkout':
      content = (
        <CalendarContainer
          visibleCalendars={2}
          selectedStartDate={selectedStartDate}
          setSelectedStartDate={setSelectedStartDate}
          selectedEndDate={selectedEndDate}
          setSelectedEndDate={setSelectedEndDate}
        />
      )
      break
    case 'guest':
      content = (
        <>
          <GuestContent guestCounts={guestCounts} dispatch={dispatch} />
        </>
      )
      break
    default:
      content = null
  }

  const dropdownWidth = type === 'where' || type === 'guest' ? 'w-1/2' : 'w-full'
  const dropdownPosition = type === 'guest' ? 'right-0' : 'left-0'

  return (
    <div
      className={`absolute top-full ${dropdownPosition} ${dropdownWidth} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 mt-1`}
    >
      <div className='py-1'>
        <div className='px-4 py-2'>{content}</div>
      </div>
    </div>
  )
}

export default Dropdown

import React, { useContext } from 'react'
import { FilterContext } from './FilterContext'

const RoomType = () => {
  const { filters, handleRoomTypeChange } = useContext(FilterContext)

  return (
    <div className='p-4 border-b-2 border-solid border-gray-200'>
      <div className='pb-6'>
        <h2 className='text-md font-semibold pb-2'>
          <span>숙소 유형</span>
        </h2>
        <div className='text-sm'>{filters.statement}</div>
      </div>
      <div className='px-10'>
        <div className='grid grid-flow-col'>
          <button
            className={`py-6 px-2 font-bold border black rounded-l-2xl ${
              filters.roomType === 'all' ? 'bg-black text-white' : 'bg-white-200 text-black'
            }`}
            onClick={() => {
              handleRoomTypeChange('all')
            }}
          >
            모든 유형
          </button>
          <button
            className={`py-6 px-8 border font-bold black rounded ${
              filters.roomType === 'room' ? 'bg-black text-white' : 'bg-white-200 text-black'
            }`}
            onClick={() => {
              handleRoomTypeChange('room')
            }}
          >
            방
          </button>
          <button
            className={`py-6 px-2 border black font-bold rounded-r-2xl ${
              filters.roomType === 'house' ? 'bg-black text-white' : 'bg-white-200 text-black'
            }`}
            onClick={() => {
              handleRoomTypeChange('house')
            }}
          >
            집 전체
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoomType

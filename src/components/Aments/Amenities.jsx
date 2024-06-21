'use client'

import amenities from '@/data/amenities.json'
import React, { useState } from 'react'

const Amenities = () => {
  const [count, setCount] = useState(amenities.length)

  const handleButtonClick = () => {
    setCount(amenities.length)
  }

  return (
    <div className='flex flex-col items-center w-[1120px] text-left py-12'>
      <h2 className='text-xl font-bold mb-8 text-left w-full'>숙소 편의시설</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full'>
        {amenities.map((amenity, index) => (
          <div key={index} className='flex items-center space-x-2 w-[460px] pb-4'>
            <img src={amenity.url} className='w-[24px] h-[24px]' alt={amenity.text} />
            <span>{amenity.text}</span>
          </div>
        ))}
      </div>

      <div className='w-full flex justify-start mt-6'>
        <button
          className='rounded border border-black bg-white text-black font-semibold hover:cursor-pointer'
          style={{ padding: '13px 23px' }}
          onClick={handleButtonClick}
        >
          편의시설 {count}개 모두 보기
        </button>
      </div>
    </div>
  )
}

export default Amenities

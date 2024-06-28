import React, { useContext, useState, useEffect } from 'react'
import { FilterContext } from './FilterContext'

const PriceRangeComponent = () => {
  const { filters, handlePriceChange } = useContext(FilterContext)
  const [range, setRange] = useState(filters.priceRange)

  useEffect(() => {
    setRange(filters.priceRange)
  }, [filters.priceRange])

  const handleChange = (e) => {
    const { name, value } = e.target
    const updatedRange = { ...range, [name]: value }
    setRange(updatedRange)
    handlePriceChange(updatedRange)
  }

  return (
    <div className='p-4 border-b-2 border-solid border-gray-200'>
      <div className='pb-6'>
        <h2 className='text-md font-semibold pb-2'>
          <span>가격 범위</span>
        </h2>
        <div className='text-sm'>1박 요금(수수료 및 세금 포함)</div>
      </div>
      <div className='px-10'>
        <div className='grid grid-flow-col'>
          <div className='border-2 border-solid border-gray-300 rounded-lg p-1'>
            <div className='text-sm text-gray-400'>최저</div>
            <span>₩ </span>
            <input
              name='min'
              value={range.min}
              onChange={handleChange}
              className='text-sm py-2 px-4 rounded-full border-none'
            />
          </div>
          <div className='flex justify-center items-center'>-</div>
          <div>
            <div className='border-2 border-solid border-gray-300 rounded-lg p-1'>
              <div className='text-sm text-gray-400'>최고</div>
              <span>₩ </span>
              <input
                name='max'
                value={range.max}
                onChange={handleChange}
                className='text-sm py-2 px-4 rounded-full border-none'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceRangeComponent

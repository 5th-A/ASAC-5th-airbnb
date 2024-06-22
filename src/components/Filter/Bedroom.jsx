import React, { useContext } from 'react'
import { FilterContext } from './FilterContext'

const Bedroom = () => {
  const { filters, handleBedroomChange } = useContext(FilterContext)
  const options = ['상관없음', '1', '2', '3', '4', '5', '6', '7', '8+']
  const categories = ['침실', '침대', '욕실']

  const handleOptionClick = (category, option) => {
    handleBedroomChange({ ...filters.bedrooms, [category]: option })
  }

  return (
    <div className='p-4 border-solid border-gray-200'>
      <div className='pb-6'>
        <h2 className='text-md font-semibold pb-2'>
          <span>침실과 침대</span>
        </h2>
      </div>
      {categories.map((category, index) => (
        <div className='mb-4' key={index}>
          <h3 className='text-sm mb-2'>{category}</h3>
          <div className='flex space-x-2'>
            {options.map((option, idx) => (
              <button
                key={idx}
                className={`text-xs py-2 px-4 rounded-full ${
                  filters.bedrooms[category] === option
                    ? 'bg-black text-white'
                    : 'border border-gray-400'
                }`}
                onClick={() => handleOptionClick(category, option)}
              >
                <span>{option}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Bedroom

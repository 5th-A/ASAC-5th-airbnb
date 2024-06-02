'use client'
import React, { useState, useRef, useEffect } from 'react'
import WhereArea from './WhereArea'
import CheckInArea from './CheckInArea'
import CheckOutArea from './CheckOutArea'
import GuestArea from './GuestArea'
import Dropdown from './Dropdown'

const SearchBarWrap = ({ children, isActive }) => (
  <div
    className={`relative SearchBarWrap w-full h-[63px] rounded-[500px] border border-neutral-300 justify-start items-center gap-px inline-flex border-solid whitespace-nowrap group ${isActive ? 'bg-gray-300' : 'bg-white'}`}
  >
    {children}
  </div>
)

const SearchBar = () => {
  const [dropdownType, setDropdownType] = useState(null)
  const searchBarRef = useRef(null)

  const handleOpenDropdown = (type) => {
    setDropdownType(type)
  }

  const handleCloseDropdown = () => {
    setDropdownType(null)
  }

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      console.log(event.target)
      handleCloseDropdown()
    }
  }

  useEffect(() => {
    if (dropdownType) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownType])

  return (
    <>
      <div ref={searchBarRef} className='w-8/12 mx-auto relative'>
        <SearchBarWrap isActive={dropdownType !== null}>
          <WhereArea
            onClick={() => handleOpenDropdown('where')}
            isActive={dropdownType === 'where'}
          />
          <CheckInArea
            onClick={() => handleOpenDropdown('checkin')}
            isActive={dropdownType === 'checkin'}
          />
          <CheckOutArea
            onClick={() => handleOpenDropdown('checkout')}
            isActive={dropdownType === 'checkout'}
          />
          <GuestArea
            onClick={() => handleOpenDropdown('guest')}
            isActive={dropdownType === 'guest'}
          />
        </SearchBarWrap>
        <Dropdown isOpen={dropdownType !== null} type={dropdownType} />
      </div>
    </>
  )
}

export default SearchBar

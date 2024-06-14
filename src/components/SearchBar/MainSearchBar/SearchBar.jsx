'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import WhereArea from '@/components/SearchBar/MainSearchBar/WhereArea'
import DateArea from '@/components/SearchBar/MainSearchBar//DateArea'
import GuestArea from '@/components/SearchBar/MainSearchBar/GuestArea'
import Dropdown from '@/components/SearchBar/MainSearchBar/Dropdown'

import { setSelectedStartDate, setSelectedEndDate } from '@/redux/slices/calendarSlice'

const SearchBarWrap = ({ children, isActive }) => (
  <div
    className={`relative SearchBarWrap w-full h-[63px] rounded-[500px] border border-neutral-300 justify-start items-center gap-px inline-flex border-solid whitespace-nowrap group ${isActive ? 'bg-gray-300' : 'bg-white'}`}
  >
    {children}
  </div>
)

const SearchBar = () => {
  const dispatch = useDispatch()
  const { selectedStartDate, selectedEndDate } = useSelector((state) => state.setCalendar)
  const { adults, teens, kids, pets } = useSelector((state) => state.guestCount)

  const [dropdownType, setDropdownType] = useState(null)
  const [selectedCity, setSelectedCity] = useState('')
  const searchBarRef = useRef(null)
  const inputRef = useRef(null)

  const handleOpenDropdown = (type) => {
    setDropdownType(type)
  }

  const handleCloseDropdown = () => {
    setDropdownType(null)
  }

  const handleSelectCity = (city) => {
    setSelectedCity(city)
    if (inputRef.current) {
      inputRef.current.value = city
    }
    handleCloseDropdown()
    handleOpenDropdown('checkin')
  }

  const handleSelectStartDate = (date) => {
    dispatch(setSelectedStartDate(date))
  }

  const handleSelectEndDate = (date) => {
    dispatch(setSelectedEndDate(date))
    handleCloseDropdown()
    if (dropdownType === 'checkin') {
      handleOpenDropdown('checkout')
    } else {
      handleOpenDropdown('guest')
    }
  }

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      handleCloseDropdown()
    }
  }

  const handleSearchButtonClick = () => {
    const city = inputRef.current ? inputRef.current.value : ''
    console.log('Selected city:', city)
    console.log('Selected StartDate', new Date(selectedStartDate).toLocaleDateString())
    console.log('Selected EndDate', new Date(selectedEndDate).toLocaleDateString())
    console.log('counts', adults, teens, kids, pets)
    // 여기에 API 전송 로직
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
      <div ref={searchBarRef} className='mx-auto relative'>
        <SearchBarWrap isActive={dropdownType !== null}>
          <WhereArea
            onClick={() => handleOpenDropdown('where')}
            isActive={dropdownType === 'where'}
            selectedCity={selectedCity}
            inputRef={inputRef}
          />
          <DateArea
            onClickCheckin={() => handleOpenDropdown('checkin')}
            onClickCheckout={() => handleOpenDropdown('checkout')}
            isActiveCheckin={dropdownType === 'checkin'}
            isActiveCheckout={dropdownType === 'checkout'}
            selectedStartDate={selectedStartDate}
            selectedEndDate={selectedEndDate}
          />
          <GuestArea
            onClick={() => handleOpenDropdown('guest')}
            isActive={dropdownType === 'guest'}
            onSearch={handleSearchButtonClick}
            guestCounts={{ adults, teens, kids, pets }}
          />
        </SearchBarWrap>
        <Dropdown
          isOpen={dropdownType !== null}
          type={dropdownType}
          onSelectCity={handleSelectCity}
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          setSelectedStartDate={handleSelectStartDate}
          setSelectedEndDate={handleSelectEndDate}
          guestCounts={{ adults, teens, kids, pets }}
          dispatch={dispatch}
        />
      </div>
    </>
  )
}

export default SearchBar

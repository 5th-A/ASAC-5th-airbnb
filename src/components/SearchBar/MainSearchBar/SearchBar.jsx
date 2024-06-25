'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WhereArea from '@/components/SearchBar/MainSearchBar/WhereArea'
import DateArea from '@/components/SearchBar/MainSearchBar/DateArea'
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

  const searchParams = {
    checkin: new Date(selectedStartDate).toISOString().split('T')[0],
    checkout: new Date(selectedEndDate).toISOString().split('T')[0],
    adults,
    teens,
    kids,
    pets,
    page: 0,
  }

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
            guestCounts={{ adults, teens, kids, pets }}
            searchParams={searchParams}
            selectedCity={selectedCity}
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

'use client'
import React, { useState, useRef, useEffect } from 'react'
import WhereArea from './WhereArea'
import DateArea from './DateArea'
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
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)
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
    handleOpenDropdown('checkin') // 도시를 선택한 후 체크인 모달을 엽니다.
  }

  const handleSelectStartDate = (date) => {
    setSelectedStartDate(date)
  }

  const handleSelectEndDate = (date) => {
    setSelectedEndDate(date)
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
      <div ref={searchBarRef} className='w-8/12 mx-auto relative'>
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
            onSearch={handleSearchButtonClick} // 검색 버튼 클릭 핸들러 전달
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
        />
      </div>
    </>
  )
}

export default SearchBar

import React from 'react'
import SearchButtonArea from '@/components/SearchBar/MainSearchBar/SearchButtonArea'
import Link from 'next/link'

function showCurrentGuest(guestCounts) {
  const { adults, teens, kids, pets } = guestCounts
  let guestList = []

  if (adults + teens > 0) {
    guestList.push(`게스트 ${adults + teens}명`)
  }
  if (kids > 0) {
    guestList.push(`, 유아 ${kids}명`)
  }
  if (pets > 0) {
    guestList.push(`, 반려동물 ${pets}마리`)
  }

  return guestList
}

function totalGuest(guestCounts) {
  let sum = 0
  Object.entries(guestCounts).map(([key, value]) => {
    sum += value
  })
  return sum
}

const GuestArea = ({ onClick, isActive, guestCounts, selectedCity, searchParams }) => {
  const queryString = new URLSearchParams(searchParams).toString()
  return (
    <>
      <div
        className={`h-[63px] min-w-[284px] flex flex-grow justify-between hover:rounded-full hover:bg-gray-200 cursor-pointer ${isActive ? 'bg-white rounded-full' : 'bg-transparent'}`}
      >
        <div className='h-[63px] px-6 py-3.5 flex flex-grow flex-col gap-x-1' onClick={onClick}>
          <div className="Who text-neutral-800 text-xs font-['SF Pro']">여행자</div>
          <div className="AddGuests min-w-[240px] overflow-hidden pb-1 text-neutral-500 text-sm font-normal font-['SF Pro']">
            {totalGuest(guestCounts) ? showCurrentGuest(guestCounts) : '게스트 추가'}
          </div>
        </div>
        <div className='min-w-[70px] min-h-[56px]'>
          {selectedCity ? (
            <Link href={`/s/${selectedCity}?${queryString}`}>
              <SearchButtonArea />
            </Link>
          ) : (
            <SearchButtonArea />
          )}
        </div>
      </div>
    </>
  )
}

export default GuestArea

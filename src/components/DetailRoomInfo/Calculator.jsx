'use client'

import GuestCountModal from '../Modal/GuestCountModal'
import GuestCalendarModal from '../Modal/GuestCalendarModal'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'

export default function Calculator({ price, FEE }) {
  const [isGuestOpen, setIsGuestOpen] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [stayDay, setStayDay] = useState(null)
  const extensionArrow = '/assets/extensionArrow.svg'
  function formatPrice(price) {
    return new Intl.NumberFormat().format(Math.round(price))
  }
  function formatDate(date) {
    const d = new Date(date)
    return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}`
  }
  function calculateNights(start, end) {
    const msInDay = 24 * 60 * 60 * 1000
    return Math.round((end - start) / msInDay)
  }
  const totalCharge = formatPrice(price * stayDay * (1 + FEE))
  const { adults, teens, kids, pets } = useSelector((state) => state.guestCount)
  const { selectedStartDate, selectedEndDate } = useSelector((state) => state.setCalendar)

  function showCurrentGuest(adults, teens, kids, pets) {
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
  function totalGuest(adults, teens, kids, pets) {
    let sum = adults + teens + kids + pets
    return sum
  }
  useEffect(() => {
    if (selectedStartDate !== null && selectedEndDate !== null) {
      setStayDay(calculateNights(selectedStartDate, selectedEndDate))
    }
    if (selectedStartDate === null || selectedEndDate === null) {
      setStayDay(null)
    }
  }, [selectedStartDate, selectedEndDate])

  return (
    <div className='calculator inline-block sticky top-0 bottom-0 my-4 p-6 border rounded-lg border-solid border-customGray shadow-xl min-w-[373px]'>
      <div className='flex flex-col relative'>
        <div className='showPrice mb-6'>
          <span className='font-semibold text-[22px]'>₩{formatPrice(price)}</span>
          <span> /박</span>
        </div>
        <div className='box-border flex flex-col relative mb-4 w-full border rounded-md border-solid border-black'>
          <div>
            {isCalendarOpen && (
              <GuestCalendarModal
                isCalendarOpen={isCalendarOpen}
                setIsCalendarOpen={setIsCalendarOpen}
              />
            )}
          </div>
          <button
            onClick={() => {
              setIsCalendarOpen((prev) => !prev)
            }}
            className='flex h-full border-b border-solid border-black items-center w-full min-h-[56px]'
          >
            <div className='w-[50%] items-center border-r border-solid border-black px-3 py-3.5'>
              <div className='text-[10px] text-left'>체크인</div>
              <div className='text-[14px] text-left mt-1'>
                {selectedStartDate !== null ? formatDate(selectedStartDate) : '날짜선택'}
              </div>
            </div>
            <div className='w-[50%] px-3'>
              <div className='text-[10px] text-left'>체크아웃</div>
              <div className='text-[14px] text-left mt-1'>
                {selectedEndDate !== null ? formatDate(selectedEndDate) : '날짜선택'}
              </div>
            </div>
          </button>

          <div className=''>
            <div
              className='flex justify-between mt-3 px-3 pb-[10px]'
              onClick={() => setIsGuestOpen((prev) => !prev)}
            >
              <div className=''>
                <div className='text-[10px]'>인원</div>
                <div className='text-[14px] mt-1'>
                  {totalGuest(adults, teens, kids, pets)
                    ? showCurrentGuest(adults, teens, kids, pets)
                    : '게스트 추가'}
                </div>
              </div>
              <div>
                {isGuestOpen ? (
                  <Image src={extensionArrow} width={16} height={16} alt='extensionArrow' />
                ) : (
                  <Image
                    className='scale-y-[-1]'
                    src={extensionArrow}
                    width={16}
                    height={16}
                    alt='extensionArrow-reverse'
                  />
                )}
              </div>
            </div>
            {isGuestOpen && (
              <GuestCountModal setIsGuestOpen={setIsGuestOpen} isGuestOpen={isGuestOpen} />
            )}
          </div>
        </div>

        <div className='w-full bg-customRed text-white font-semibold py-2 px-4 rounded-md'>
          <button className='w-full py-2 px-4'>예약하기</button>
        </div>
      </div>
      <div className='pt-2 w-full'>
        <div className='text-center text-[14px] w-[100%]'>
          예약 확정 전에는 요금이 청구되지 않습니다.
        </div>
      </div>
      <div className='flex flex-row justify-between pt-6'>
        <div>
          ₩{formatPrice(price)} X {stayDay}박
        </div>
        <div>₩{formatPrice(price * stayDay)}</div>
      </div>
      <div className='flex flex-row justify-between pt-4 border-b'>
        <div>에어비앤비 서비스 수수료</div>
        <div>₩{formatPrice(price * stayDay * FEE)}</div>
      </div>
      <div className='flex flex-row justify-between pt-6 mt-6 border-t border-gray-300 border-solid'>
        <div>총 합계</div>
        <div>₩{totalCharge}</div>
      </div>
    </div>
  )
}

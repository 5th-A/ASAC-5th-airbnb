'use client'

import { useEffect, useState } from 'react'
import roomDetail from '@/data/roomDetail.json'
import AccommodationDetails from '../AccommodationDetails/AccommodationDetails'
import GuestCountModal from '../Modal/GuestCountModal'
import { useSelector } from 'react-redux'
import GuestCalendarModal from '../Modal/GuestCalendarModal'
import Image from 'next/image'

function FilterInfo({ filter }) {
  const filterInfo = Object.entries(filter)
    .filter(([key, value]) => value !== 0)
    .map(([key, value]) => {
      switch (key) {
        case 'maximum':
          return `최대 인원 ${value}명`
        case 'beds':
          return `침대 ${value}개`
        case 'bedRooms':
          return `침실 ${value}개`
        case 'bathRooms':
          return `화장실 ${value}개`
        case 'floor':
          return `${value}층`
      }
    })
    .join(' · ')
  return <div>{filterInfo}</div>
}

function FilterCategory({ categories }) {
  return Object.entries(categories).map(([key, value]) => (
    <div key={value.id} className='flex gap-1'>
      <Image src={value.icon} width={20} height={20} alt='filtered_category_icon' />
      <div>{value.name}</div>
    </div>
  ))
}

function HostInfo({ hostInfo }) {
  function hostingYear(year) {
    const currentYear = new Date().getFullYear()
    return currentYear - year > 0 ? `${currentYear - year}년` : '1년 미만'
  }
  return (
    <div className='flex items-center py-6 border-t border-b border-gray-300 border-solid gap-x-6'>
      <div className='overflow-hidden w-10 h-10' style={{ borderRadius: '70%' }}>
        <Image src={hostInfo.profile} width={40} height={40} alt='host profile image' />
      </div>
      <div className='flex flex-col gap-y-1 '>
        <div className='font-semibold'>호스트: {hostInfo.name} 님</div>
        <div>
          <ol>
            {hostInfo.type === '슈퍼호스트' ? (
              <>
                <li className='float-left text-gray-500 text-sm'>{hostInfo.type}</li>
                <li className='float-left px-1 text-gray-500 text-sm'>{'·'}</li>
                <li className='float-left text-gray-500 text-sm'>
                  호스팅 경력 {hostingYear(hostInfo.year)}
                </li>
              </>
            ) : (
              <li className='text-sm'>호스팅 경력 {hostingYear(hostInfo.year)}</li>
            )}
          </ol>
        </div>
      </div>
    </div>
  )
}

function Calculator({
  price,
  stayDay,
  FEE,
  setIsGuestOpen,
  isGuestOpen,
  isCalendarOpen,
  setIsCalendarOpen,
}) {
  const extensionArrow = '/assets/extensionArrow.svg'
  function formatPrice(price) {
    return new Intl.NumberFormat().format(Math.round(price))
  }
  function formatDate(date) {
    const d = new Date(date)
    return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}`
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
                  {showCurrentGuest(adults, teens, kids, pets)}
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

export default function DetailRoomInfo({ id }) {
  const ROOM_ID = id

  const FEE = 0.1552
  const { selectedStartDate, selectedEndDate } = useSelector((state) => state.setCalendar)
  const guestPrefer_Left = '/assets/guestPrefer_Left.svg'
  const guestPrefer_Right = '/assets/guestPrefer_Right.svg'
  const [isGuestOpen, setIsGuestOpen] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [stayDay, setStayDay] = useState(null)
  function calculateNights(start, end) {
    const msInDay = 24 * 60 * 60 * 1000
    return Math.round((end - start) / msInDay)
  }
  useEffect(() => {
    if (selectedStartDate !== null && selectedEndDate !== null) {
      setStayDay(calculateNights(selectedStartDate, selectedEndDate))
    }
    if (selectedStartDate === null || selectedEndDate === null) {
      setStayDay(null)
    }
  }, [selectedStartDate, selectedEndDate])

  //find메서드로 해당 객체만 반환
  const roomDetailData = roomDetail.find((room) => room.id == ROOM_ID)
  if (!roomDetailData) return <div>해당하는 방 정보를 찾을 수 없습니다.</div>

  return (
    <div className='flex w-full items-center justify-center border-b border-customGray border-solid'>
      <div className='flex flex-grow-1 w-full itemWrapper justify-between'>
        <div className='box-border w-[60%]'>
          <div className='py-2'>
            <h2 className='text-xl font-semibold'>
              {roomDetailData.address}, {roomDetailData.roomType}
            </h2>
            <FilterInfo filter={roomDetailData.filter} />
          </div>
          {roomDetailData.guestPrefer && (
            <div className='flex py-5 px-7 border border-solid rounded-xl border-gray-300'>
              <div className='flex justify-center space-x-4'>
                <div
                  className='flex justify-center'
                  style={{ minWidth: '94px', maxHeight: '36px' }}
                >
                  <Image src={guestPrefer_Left} width={23} height={36} alt='guestPrefer_Left' />
                  <div className='font-semibold text-center px-1 pb-1' style={{ minWidth: '56px' }}>
                    게스트 <br /> 선호
                  </div>
                  <Image src={guestPrefer_Right} width={23} height={36} alt='guestPrefer_Right' />
                </div>
                <div
                  className='overflow-hidden whitespace-normal font-semibold'
                  style={{ maxHeight: '48px' }}
                >
                  에어비앤비 게스트에게 가장 사랑받는 숙소
                </div>
              </div>
              <div
                className='flex-grow justify-center text-center px-4 border-r border-gray-300 border-solid'
                style={{ minWidth: '81px' }}
              >
                <div className='font-semibold text-[22px]'>4.89</div>
                <div>별개수</div>
              </div>
              <div className='mx-2'></div>
              <div
                className='flex-grow justify-between items-center text-center'
                style={{ minWidth: '52px' }}
              >
                <div className='font-semibold text-[18px]'>426개</div>
                <div className='text-[12px] underline underline-offset-1 '>후기</div>
              </div>
            </div>
          )}
          <div className='flex  pt-5 pb-8'>
            <div className='flex-grow '>
              <div className='width-[100%] grid grid-cols-2 grid-rows-3 gap-3 auto-rows-fr text-sm'>
                <FilterCategory categories={roomDetailData.categories} />
              </div>
            </div>
          </div>
          <HostInfo hostInfo={roomDetailData.host} />
          <div className='pt-8 pb-12 border-b whitespace-pre-line border-gray-300 border-solid'>
            {roomDetailData.introduction}
          </div>
          <div className='pt-12 pb-12 '>
            <AccommodationDetails />
          </div>
        </div>
        <div className='flex relative'>
          <div className='ml-auto mt-8'>
            <Calculator
              isGuestOpen={isGuestOpen}
              isCalendarOpen={isCalendarOpen}
              setIsCalendarOpen={setIsCalendarOpen}
              setIsGuestOpen={setIsGuestOpen}
              price={roomDetailData.price}
              stayDay={stayDay}
              FEE={FEE}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

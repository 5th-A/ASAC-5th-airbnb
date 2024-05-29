'use client'
import { useState } from 'react'
import guestPrefer_Left from '/public/assets/guestPrefer_Left.svg'
import guestPrefer_Right from '/public/assets/guestPrefer_Right.svg'
import extensionArrow from '/public/assets/extensionArrow.svg'
import roomDetail from '@/data/roomDetail.json'
import AccommodationDetails from '../AccommodationDetails/AccommodationDetails'

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
      <img src={value.icon} width='20' height='20' />
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
        <img className='object-cover' src={hostInfo.profile} />
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

function Calculator({ price, stayDay, FEE, setIsOpen, isOpen }) {
  function formatPrice(price) {
    return new Intl.NumberFormat().format(price)
  }
  const totalCharge = formatPrice(price * stayDay * (1 + FEE))

  return (
    <div className='calculator inline-block sticky top-0 bottom-0 p-6 border rounded-lg border-solid border-customGray shadow-xl'>
      <div className='flex flex-col'>
        <div className='showPrice mb-6'>
          <span className='font-semibold text-[22px]'>₩{formatPrice(price)}</span>
          <span> /박</span>
        </div>
        <div className='box-border flex flex-col mb-4 w-full border rounded-md border-solid border-black'>
          <button
            style={{ minHeight: '56px' }}
            className='flex h-full border-b border-solid border-black items-center w-full'
          >
            <div className='w-[50%] items-center border-r border-solid border-black px-3'>
              <div className='text-[10px] text-left'>체크인</div>
              <div className='text-[14px] text-left'>2024. 6. 9.</div>
            </div>
            <div className='w-[50%] px-3'>
              <div className='text-[10px] text-left'>체크아웃</div>
              <div className='text-[14px] text-left'>2024. 6. 14.</div>
            </div>
          </button>
          <div
            className='flex justify-between mt-3 px-3 pb-[10px]'
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div>
              <div className='text-[10px]'>인원</div>
              <div className='text-[14px]'>게스트 1명</div>
            </div>
            <div>
              {isOpen ? (
                <img src={extensionArrow.src}></img>
              ) : (
                <img className='scale-y-[-1]' src={extensionArrow.src}></img>
              )}
            </div>
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

export default function DetailRoomInfo(/* {ROOM_NAME 혹은 식별요소 props로 넘겨받을 예정} */) {
  const ROOM_NAME = 'NEW 스테이구구(Stay GUGU) 302호'
  const STAY_DAY = 6
  const FEE = 0.1552

  const [isOpen, setIsOpen] = useState(false)
  //find메서드로 해당 객체만 반환
  const roomDetailData = roomDetail.find((room) => room.roomName === ROOM_NAME)

  if (!roomDetailData) return <div>해당하는 방 정보를 찾을 수 없습니다.</div>

  return (
    <div className='flex w-full items-center'>
      {' '}
      //여기임
      <div className='flex itemWrapper justify-between'>
        <div className='flex-6 box-border'>
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
                  <img src={guestPrefer_Left.src} width='23' height='36' />
                  <div className='font-semibold text-center px-1 pb-1' style={{ minWidth: '56px' }}>
                    게스트 <br /> 선호
                  </div>
                  <img src={guestPrefer_Right.src} width='23' height='36' />
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
          <div className='flex justify-between pt-5 pb-8'>
            <div className='flex-grow'>
              <div className='width-[100%] grid grid-cols-2 grid-rows-3 gap-3 auto-rows-fr text-sm'>
                <FilterCategory categories={roomDetailData.categories} />
              </div>
            </div>
          </div>
          <HostInfo hostInfo={roomDetailData.host} />
          <div className='pt-8 pb-12 border-b whitespace-pre-line border-gray-300 border-solid'>
            {roomDetailData.introduction}
          </div>
          <div className='pt-12 pb-12 border-b border-gray-300 border-solid'>
            <AccommodationDetails />
          </div>
        </div>
        <div className='flex relative w-[40%]'>
          <div className='ml-auto mt-8'>
            <Calculator
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              price={roomDetailData.price}
              stayDay={STAY_DAY}
              FEE={FEE}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

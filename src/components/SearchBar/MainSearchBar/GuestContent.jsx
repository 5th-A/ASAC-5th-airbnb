'use client'
import { useRef } from 'react'
import { increment, decrement } from '@/redux/slices/guestCountSlice'

function getDetailInfo(type) {
  switch (type) {
    case '성인':
      return '13세 이상'
    case '청소년':
      return '2~12세'
    case '유아':
      return '2세 미만'
    case '반려동물':
      return '보조동물을 동반하시나요?'
    default:
      return ''
  }
}

function CounterButton({ onClick, children }) {
  return (
    <button
      className='border border-solid border-[rgb(176,176,176)] hover:border-black rounded-full text-[22px] text-[rgb(176,176,176)] hover:text-black w-8 h-8 flex items-center justify-center'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function GuestCountButton({ type, count, handleIncrement, handleDecrement, children }) {
  return (
    <div className='flex flex-row justify-between py-4 items-center'>
      <div>
        <div className='text-[16px] font-semibold pb-1'>{children}</div>
        <div className='text-[14px]'>{getDetailInfo(children)}</div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <CounterButton
          onClick={() => {
            handleIncrement(type)
          }}
        >
          +
        </CounterButton>
        <div className='px-2'>{count}</div>
        <CounterButton
          onClick={() => {
            handleDecrement(type)
          }}
        >
          -
        </CounterButton>
      </div>
    </div>
  )
}

export default function GuestCountModal({ guestCounts, dispatch }) {
  const modalRef = useRef()
  const { adults, teens, kids, pets } = guestCounts
  return (
    <div
      ref={modalRef}
      className='absolute z-50 bg-white w-full border border-solid rounded-xl border-gray-300'
    >
      <div className='p-4 mb-4'>
        <GuestCountButton
          type='adults'
          count={adults}
          handleIncrement={(category) => dispatch(increment(category))}
          handleDecrement={(category) => dispatch(decrement(category))}
        >
          성인
        </GuestCountButton>
        <GuestCountButton
          type='teens'
          count={teens}
          handleIncrement={(category) => dispatch(increment(category))}
          handleDecrement={(category) => dispatch(decrement(category))}
        >
          청소년
        </GuestCountButton>
        <GuestCountButton
          type='kids'
          count={kids}
          handleIncrement={(category) => dispatch(increment(category))}
          handleDecrement={(category) => dispatch(decrement(category))}
        >
          유아
        </GuestCountButton>
        <GuestCountButton
          type='pets'
          count={pets}
          handleIncrement={(category) => dispatch(increment(category))}
          handleDecrement={(category) => dispatch(decrement(category))}
        >
          반려동물
        </GuestCountButton>
      </div>
    </div>
  )
}

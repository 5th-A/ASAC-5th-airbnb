'use client'
import { useState } from 'react'

function getDetailInfo(type) {
  switch (type) {
    case '성인':
      return '13세 이상'
    case '청소년':
      return '2~12세'
    case '아동':
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

function GuestCountButton({ type, setType, children }) {
  return (
    <div className='flex flex-row justify-between py-4 items-center'>
      <div>
        <div className='text-[16px] font-semibold pb-1'>{children}</div>
        <div className='text-[14px]'>{getDetailInfo(children)}</div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <CounterButton onClick={() => setType((prev) => prev + 1)}>+</CounterButton>
        <div className='px-2'>{type}</div>
        <CounterButton onClick={() => setType((prev) => (prev !== 0 ? prev - 1 : prev))}>
          -
        </CounterButton>
      </div>
    </div>
  )
}

export default function GuestCountModal() {
  const [adults, setAdults] = useState(0)
  const [teens, setTeens] = useState(0)
  const [kids, setKids] = useState(0)
  const [pets, setPets] = useState(0)

  return (
    <div className='absolute z-50 bg-white w-full border border-solid rounded-xl border-gray-300'>
      <div className='p-4 mb-4'>
        <GuestCountButton type={adults} setType={setAdults}>
          성인
        </GuestCountButton>
        <GuestCountButton type={teens} setType={setTeens}>
          청소년
        </GuestCountButton>
        <GuestCountButton type={kids} setType={setKids}>
          아동
        </GuestCountButton>
        <GuestCountButton type={pets} setType={setPets}>
          반려동물
        </GuestCountButton>
      </div>
    </div>
  )
}

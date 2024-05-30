'use client'
import { useState } from 'react'

function GuestCountButton({ type, setType, children }) {
  return (
    <div className='flex flex-row justify-between p-4'>
      <div>{children}</div>
      <div className='flex flex-row w-[35%] justify-between'>
        <button
          onClick={() => {
            setType((prev) => {
              return prev + 1
            })
          }}
        >
          +
        </button>
        <div>{type}</div>
        <button
          onClick={() => {
            setType((prev) => (prev !== 0 ? prev - 1 : prev))
          }}
        >
          -
        </button>
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
      <div></div>
    </div>
  )
}

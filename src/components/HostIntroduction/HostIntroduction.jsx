'use client'
import React, { createContext, useContext, useState } from 'react'
import superHostBadge from '/public/assets/hosts/superHost.svg'
import superHostBadgeRed from '/public/assets/hosts/superHostRed.svg'
import badge from '/public/assets/hosts/badge.svg'
import data from '@/data/RoomInfo.json'

const HostContext = createContext()

const HostProvider = ({ children }) => {
  const { host, introduction } = data
  const currentYear = new Date().getFullYear()
  const hostingYears = currentYear - host.year < 1 ? '1년 미만' : `${currentYear - host.year}년`
  const isSuperHost = host.type === '슈퍼호스트'

  return (
    <HostContext.Provider value={{ host, introduction, hostingYears, isSuperHost }}>
      {children}
    </HostContext.Provider>
  )
}

const HostProfile = () => {
  return (
    <div className='flex-shrink-0 bg-white rounded-xl shadow w-[380px] h-[242px] flex items-center justify-center'>
      <HostInfo />
      <HostStats />
    </div>
  )
}

const HostInfo = () => {
  const { host, isSuperHost } = useContext(HostContext)
  return (
    <div className='w-[200px] relative'>
      <div className='flex flex-col items-center'>
        <img className='w-28 h-28 rounded-full' src={host.profile} alt={host.name} />
        {isSuperHost && (
          <img
            className='w-6 h-6 absolute bottom-0 right-[60px] top-[90px]'
            src={superHostBadgeRed.src}
            alt='Superhost Badge'
          />
        )}
        <div className='mt-2 text-center'>
          <div className='text-3xl font-medium text-black'>{host.name}</div>
          <div className='text-gray-500 text-xs flex items-center'>
            {isSuperHost && (
              <img src={superHostBadge.src} className='w-4 h-4 mr-1' alt='Superhost Badge' />
            )}
            {host.type}
          </div>
        </div>
      </div>
    </div>
  )
}

const HostStats = () => {
  const { hostingYears } = useContext(HostContext)
  return (
    <div className='ml-6 h-[180px] pt-4'>
      <div className='font-medium text-gray-500 text-xs'>후기</div>
      <p className='w-[100px] text-lg border-solid border-slate-300 border-b-[1px]'>94개</p>
      <div className='font-medium text-gray-500 text-xs pt-2'>평점</div>
      <p className='text-lg border-solid border-slate-300 border-b-[1px]'>4.96</p>
      <div className='font-medium text-gray-500 text-xs pt-2'>호스팅 경력</div>
      <p className='text-lg'>{hostingYears}</p>
    </div>
  )
}

const HostIntroductionText = () => {
  const { introduction } = useContext(HostContext)
  const [isExpanded, setIsExpanded] = useState(false)
  const introductionPreview =
    introduction.length > 100 ? `${introduction.substring(0, 70)}...` : introduction
  return (
    <div className='mt-4 w-[380px]'>
      <p className='text-gray-500'>{isExpanded ? introduction : introductionPreview}</p>
      {introduction.length > 100 && (
        <button onClick={() => setIsExpanded(!isExpanded)} className='text-black-500 ml-2'>
          {isExpanded ? '접기' : '더보기'}
        </button>
      )}
    </div>
  )
}

const HostDetails = () => {
  const { host, isSuperHost } = useContext(HostContext)
  return (
    <div className='flex-grow p-6'>
      <div className='flex-col'>
        <h3 className='text-lg font-medium text-black'>
          {isSuperHost ? `${host.name} 님은 슈퍼호스트입니다.` : ''}
        </h3>
        <p className='text-gray-500 mt-2'>
          {isSuperHost
            ? '슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.'
            : ''}
        </p>
        <div className='mt-4 flex-col'>
          <h3 className='text-lg font-medium text-black'>호스트 상세 정보</h3>
          <p className='text-gray-500 mt-2'>응답률: 100%</p>
          <p className='text-gray-500'>1시간 이내에 응답</p>
        </div>
        <button className='mt-4 px-4 py-2 bg-black text-white rounded w-[207px] h-[48px]'>
          호스트에게 메시지 보내기
        </button>
      </div>
      <div className='flex border-solid border-slate-300 border-t-[1px] mt-10'>
        <div className='mt-5'>
          <img src={badge.src} alt='Safety Badge' />
        </div>
        <span className='text-xs mt-7 pl-4'>
          안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나 대화를 나누지 마세요.
        </span>
      </div>
    </div>
  )
}

const HostIntroduction = () => {
  return (
    <HostProvider>
      <div className='mx-auto mb-6 bg-[#f0efe9] rounded-xl shadow-md p-6 flex space-x-6 w-4/5'>
        <div className='flex flex-col p-6'>
          <HostProfile />
          <HostIntroductionText />
        </div>
        <HostDetails />
      </div>
    </HostProvider>
  )
}

export default HostIntroduction

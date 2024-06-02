import React from 'react'

const Dropdown = ({ isOpen, type }) => {
  if (!isOpen) return null

  let content
  switch (type) {
    case 'where':
      content = (
        <>
          <div className="Where text-neutral-800 text-xs font-['SF Pro'] ">지역으로 검색하기</div>
          <div className="SearchDestinations text-neutral-500 text-sm font-normal font-['SF Pro'] ">
            <div>서울</div>
            <div>부산</div>
            <div>속초</div>
          </div>
        </>
      )
      break
    case 'checkin':
      content = (
        <>
          <div className="CheckIn text-neutral-800 text-xs font-['SF Pro'] ">날짜를 선택하세요</div>
          <div className="AddDates text-neutral-500 text-sm font-normal font-['SF Pro'] ">
            <div>2023-12-01</div>
            <div>2023-12-02</div>
            <div>2023-12-03</div>
          </div>
        </>
      )
      break
    case 'checkout':
      content = (
        <>
          <div className="CheckOut text-neutral-800 text-xs font-['SF Pro'] ">
            날짜를 선택하세요
          </div>
          <div className="AddDates text-neutral-500 text-sm font-normal font-['SF Pro'] ">
            <div>2023-12-01</div>
            <div>2023-12-02</div>
            <div>2023-12-03</div>
          </div>
        </>
      )
      break
    case 'guest':
      content = (
        <>
          <div className="Guest text-neutral-800 text-xs font-['SF Pro'] ">게스트 선택하기</div>
          <div className="GuestOptions text-neutral-500 text-sm font-normal font-['SF Pro'] ">
            <div>성인</div>
            <div>어린이</div>
            <div>유아</div>
            <div>반려동물</div>
          </div>
        </>
      )
      break
    default:
      content = null
  }

  const dropdownWidth = type === 'where' || type === 'guest' ? 'w-1/2' : 'w-full'
  const dropdownPosition = type === 'guest' ? 'right-0' : 'left-0'

  return (
    <div
      className={`absolute top-full ${dropdownPosition} ${dropdownWidth} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 mt-1`}
    >
      <div className='py-1'>
        <div className='px-4 py-2'>{content}</div>
      </div>
    </div>
  )
}

export default Dropdown

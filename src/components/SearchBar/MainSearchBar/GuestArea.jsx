import React from 'react'
import SearchButtonArea from './SearchButtonArea'

const GuestArea = ({ onClick, isActive, onSearch }) => (
  <div
    className={`Frame23 w-2/6 h-[63px] inline-flex hover:rounded-full hover:bg-gray-200 cursor-pointer ${isActive ? 'bg-white rounded-full' : 'bg-transparent'}`}
  >
    <div
      className='Frame23 w-[209px] h-[63px] px-6 py-3.5 flex flex-col justify-start items-start gap-1 inline-flex'
      onClick={onClick}
    >
      <div className="Who text-neutral-800 text-xs font-['SF Pro']">여행자</div>
      <div className="AddGuests text-neutral-500 text-sm font-normal font-['SF Pro']">
        게스트 추가
      </div>
    </div>
    <div onClick={onSearch}>
      <SearchButtonArea />
    </div>
  </div>
)

export default GuestArea

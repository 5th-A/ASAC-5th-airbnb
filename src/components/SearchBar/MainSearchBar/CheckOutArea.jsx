import React from 'react'

const CheckOutArea = ({ onClick, isActive }) => (
  <div
    className={`Frame21 w-1/6 h-[63px] px-6 py-3.5 flex justify-between items-center gap-1 inline-flex hover:bg-gray-200 hover:rounded-full cursor-pointer ${isActive ? 'bg-white rounded-full' : 'bg-transparent'}`}
    onClick={onClick}
  >
    <div>
      <div className="CheckOut text-neutral-800 text-xs font-['SF Pro']">체크아웃</div>
      <div className="AddDates text-neutral-500 text-sm font-normal font-['SF Pro']">날짜 추가</div>
    </div>
    <div
      className={`Line11 h-[32px] w-0 border border-neutral-300 border-solid group-hover:border-transparent ${isActive ? 'border-transparent' : ''}`}
    ></div>
  </div>
)

export default CheckOutArea

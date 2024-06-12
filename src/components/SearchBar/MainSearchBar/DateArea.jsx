import React from 'react'

const DateArea = ({
  onClickCheckin,
  onClickCheckout,
  isActiveCheckin,
  isActiveCheckout,
  selectedStartDate,
  selectedEndDate,
}) => {
  return (
    <>
      <div className='flex justify-between'>
        <div
          className={`Frame21 h-[63px] px-6 py-3.5 flex justify-between items-center gap-1 hover:bg-gray-200 hover:rounded-full cursor-pointer ${isActiveCheckin ? 'bg-white rounded-full' : 'bg-transparent'}`}
          onClick={onClickCheckin}
        >
          <div>
            <div className="CheckIn text-neutral-800 text-xs font-['SF Pro']">체크인</div>
            <div className="AddDates text-neutral-500 text-sm font-normal font-['SF Pro']">
              {selectedStartDate ? new Date(selectedStartDate).toLocaleDateString() : '날짜 추가'}
            </div>
          </div>
          <div
            className={`Line11 h-[32px] w-0 border border-neutral-300 border-solid group-hover:border-transparent ${isActiveCheckin ? 'border-transparent' : ''}`}
          ></div>
        </div>
        <div
          className={`Frame21 w-1/2 h-[63px] px-6 py-3.5 flex justify-between items-center gap-1 hover:bg-gray-200 hover:rounded-full cursor-pointer ${isActiveCheckout ? 'bg-white rounded-full' : 'bg-transparent'}`}
          onClick={onClickCheckout}
        >
          <div>
            <div className="CheckOut text-neutral-800 text-xs font-['SF Pro']">체크아웃</div>
            <div className="AddDates text-neutral-500 text-sm font-normal font-['SF Pro']">
              {selectedEndDate ? new Date(selectedEndDate).toLocaleDateString() : '날짜 추가'}
            </div>
          </div>
          <div
            className={`Line11 h-[32px] w-0 border border-neutral-300 border-solid group-hover:border-transparent ${isActiveCheckout ? 'border-transparent' : ''}`}
          ></div>
        </div>
      </div>
    </>
  )
}

export default DateArea

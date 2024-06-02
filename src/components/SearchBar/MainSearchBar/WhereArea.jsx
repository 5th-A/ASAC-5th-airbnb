import React from 'react'

const WhereArea = ({ onClick, isActive }) => (
  <div
    className={`Frame24 group w-2/6 h-[63px] px-6 py-3.5 rounded-tl-[500px] rounded-bl-[500px] flex justify-between items-center gap-1 inline-flex hover:bg-gray-200 hover:rounded-full cursor-pointer ${isActive ? 'bg-white rounded-full' : 'bg-transparent'}`}
    onClick={onClick}
  >
    <div>
      <div className="Where text-neutral-800 text-xs font-['SF Pro']">여행지</div>
      <div className="SearchDestinations text-neutral-500 text-sm font-normal font-['SF Pro']">
        여행지 검색
      </div>
    </div>
    <div
      className={`Line11 h-[32px] w-0 border border-neutral-300 border-solid group-hover:border-transparent ${isActive ? 'border-transparent' : ''}`}
    ></div>
  </div>
)

export default WhereArea

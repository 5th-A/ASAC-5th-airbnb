import React from 'react'

const WhereArea = ({ onClick, isActive, selectedCity, inputRef }) => (
  <>
    <div
      className={`Frame24 group h-[64px] px-6 py-3.5 rounded-tl-[500px] rounded-bl-[500px] justify-between items-center gap-1 inline-flex hover:bg-gray-200 hover:rounded-full cursor-pointer ${isActive ? 'bg-white rounded-full' : 'bg-transparent'}`}
      onClick={onClick}
    >
      <div>
        <div className="Where text-neutral-800 text-xs font-['SF Pro']">여행지</div>
        <div className="SearchDestinations text-neutral-500 text-sm font-normal font-['SF Pro']">
          <input
            ref={inputRef}
            className='bg-transparent outline-none w-full'
            type='text'
            placeholder='여행지 검색'
            defaultValue={selectedCity}
          />
        </div>
      </div>
    </div>
    <div
      className={`Line11 min-h-8 w-0 border border-neutral-300 border-solid group-hover:border-transparent ${isActive ? 'border-transparent' : ''}`}
    ></div>
  </>
)

export default WhereArea

const Line = () => (
  <div className='Line11 w-[25px] h-[0px] rotate-90 border border-neutral-300 border-solid'></div>
)

const SmallWhereArea = () => (
  <>
    <div className='Frame24 w-2/6 h-[48px]  rounded-tl-[500px] rounded-bl-[500px] flex flex-col justify-center items-center gap-1 inline-flex hover:bg-gray-200 hover:rounded-full'>
      <div className="SearchDestinations text-neutral-500 text-sm font-normal font-['SF Pro'] ">
        어디든지
      </div>
    </div>
  </>
)

const CheckInArea = () => (
  <>
    <div className='Frame21 w-2/6 h-[48px]  flex-col justify-center items-center gap-1 inline-flex hover:bg-gray-200 hover:rounded-full'>
      <div className="AddDates text-neutral-500 text-sm font-normal font-['SF Pro']">
        언제든 일주일
      </div>
    </div>
  </>
)

const SmallSearchButtonArea = () => (
  <div className='pb-0.7 px-2.5'>
    <svg width='32' height='32' viewBox='0 0 48 49' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='24' cy='24.5' r='24' fill='#FF385C' />
      <circle cx='22.5' cy='23' r='5.98611' stroke='white' />
      <line x1='31.9492' y1='33.0508' x2='25.5852' y2='26.6869' stroke='white' />
    </svg>
  </div>
)

const GuestArea = () => (
  <>
    <div className='Frame23  w-2/6 h-[48px] inline-flex hover:rounded-full hover:bg-gray-200 justify-center items-center'>
      <div className='Frame23 w-[209px] h-[48px]  flex-col justify-center items-center gap-1 inline-flex '>
        <div className="AddGuests text-neutral-500 text-sm font-normal font-['SF Pro']">
          게스트 추가
        </div>
      </div>
      <SmallSearchButtonArea />
    </div>
  </>
)

const SmallSearchBarWrap = ({ children }) => (
  <div className='SearchBarWrap  h-[43px] rounded-[500px] border border-neutral-300 justify-center items-center gap-px inline-flex border-solid whitespace-nowrap'>
    {children}
  </div>
)

const SmallSearchBar = () => (
  <SmallSearchBarWrap>
    <SmallWhereArea />
    <CheckInArea />
    <GuestArea />
  </SmallSearchBarWrap>
)

export default SmallSearchBar

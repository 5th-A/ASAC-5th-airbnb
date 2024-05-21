const Line = () => (
    <div className="Line11 w-[25px] h-[0px] rotate-90 border border-neutral-300 border-solid"></div>
  );

  
  const WhereArea = () => (
    <>
      <div className="Frame24 w-2/6 h-[63px] px-6 py-3.5 rounded-tl-[500px] rounded-bl-[500px] flex flex-col justify-start items-start gap-1 inline-flex hover:bg-gray-200 hover:rounded-full">
        <div className="Where text-neutral-800 text-xs font-['SF Pro'] ">여행지</div>
        <div className="SearchDestinations text-neutral-500 text-sm font-normal font-['SF Pro'] ">여행지 검색</div>
      </div>
      <Line />
    </>
  );
  
  const CheckInArea = () => (
    <>
      <div className="Frame21 w-1/6 h-[63px] px-6 py-3.5 flex-col justify-start items-start gap-1 inline-flex hover:bg-gray-200 hover:rounded-full">
        <div className="CheckIn text-neutral-800 text-xs font-['SF Pro']">체크인</div>
        <div className="AddDates text-neutral-500 text-sm font-normal font-['SF Pro']">날짜 추가</div>
      </div>
      <Line />
    </>
  );
  
  const CheckOutArea = () => (
    <>
      <div className="Frame22 w-1/6 h-[63px] px-6 py-3.5  flex-col justify-start items-start gap-1 inline-flex hover:bg-gray-200 hover:rounded-full">
        <div className="CheckOut text-neutral-800 text-xs font-['SF Pro']">체크아웃</div>
        <div className="AddDates text-neutral-500 text-sm font-normal font-['SF Pro']">날짜 추가</div>
      </div>  
      <Line />
    </>
  );

  const SearchButtonArea = () => (
    <div className="pt-1.5 px-2.5">
      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle  cx="24" cy="24.5" r="24" fill="#FF385C"/>
        <circle cx="22.5" cy="23" r="5.98611" stroke="white" />
        <line x1="31.9492" y1="33.0508" x2="25.5852" y2="26.6869" stroke="white" />
      </svg>
      </div>
  );
  
  const GuestArea = () => (
    <>
      <div className='Frame23  w-2/6 h-[63px] inline-flex hover:rounded-full hover:bg-gray-200 '>
        <div className="Frame23 w-[209px] h-[63px] px-6 py-3.5 flex-col justify-start items-start gap-1 inline-flex ">
          <div className="Who text-neutral-800 text-xs font-['SF Pro']">여행자</div>
          <div className="AddGuests text-neutral-500 text-sm font-normal font-['SF Pro']">게스트 추가</div>
        </div>
        <SearchButtonArea/>
      </div>
    </>
  );
  
  const SearchBarWrap = ({ children }) => (
    <div className="SearchBarWrap w-8/12 h-[63px] rounded-[500px] border border-neutral-300 justify-start items-center gap-px inline-flex border-solid whitespace-nowrap">
      {children}
    </div>
  );
  
  const SearchBar = () => (
    <SearchBarWrap>
      <WhereArea />
      <CheckInArea />
      <CheckOutArea />
      <GuestArea />
    </SearchBarWrap>
  );
  
 
  
  export default SearchBar;
  
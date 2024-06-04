const RoomTypeComponent = ({ selectedButton, handleButtonClick }) => {
  return (
    <div className='p-6 border-b-2 border-solid border-gray-200'>
      <div className='pb-6'>
        <h2 className='text-md font-semibold pb-2'>
          <span>숙소유형</span>
        </h2>
        <div className='text-sm'>
          {selectedButton === 'all'
            ? '방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.'
            : selectedButton === 'room'
              ? '단독으로 사용하는 방이 있고, 공용 공간도 있는 형태입니다.'
              : '집 전체를 단독으로 사용합니다.'}
        </div>
      </div>
      <div className='px-10'>
        <div className='grid grid-flow-col'>
          <button
            className={`py-6 px-2 font-bold border black rounded-l-2xl ${selectedButton === 'all' ? 'bg-black text-white' : 'bg-white-200 text-black'}`}
            onClick={() =>
              handleButtonClick('all', '방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.')
            }
          >
            모든 유형
          </button>
          <button
            className={`py-6 px-8 border font-bold black rounded ${selectedButton === 'room' ? 'bg-black text-white' : 'bg-white-200 text-black'}`}
            onClick={() =>
              handleButtonClick('room', '단독으로 사용하는 방이 있고, 공용 공간도 있는 형태입니다.')
            }
          >
            방
          </button>
          <button
            className={`py-6 px-2 border black font-bold rounded-r-2xl ${selectedButton === 'house' ? 'bg-black text-white' : 'bg-white-200 text-black'}`}
            onClick={() => handleButtonClick('house', '집 전체를 단독으로 사용합니다.')}
          >
            집 전체
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoomTypeComponent

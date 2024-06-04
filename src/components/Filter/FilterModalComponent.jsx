import { useEffect, useState } from 'react'

const FilterModalComponent = ({ isOpen, onClose }) => {
  const [statement, setStatement] = useState('방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.')
  const [selectedButton, setSelectedButton] = useState('all') // 초기값을 'all'로 설정

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden' // 배경 스크롤 비활성화
    } else {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto' // 배경 스크롤 활성화
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto' // 배경 스크롤 활성화
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleButtonClick = (button) => {
    setSelectedButton(button)
  }

  return (
    <section>
      <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
        <div className='w-[600px] max-h-[90vh] border-b-8 bg-white rounded-lg p-5 flex flex-col'>
          {/* 모달 상단 - 필터 제목 */}
          <header className='flex justify-between items-center mb-4'>
            <div className='w-full flex justify-center relative'>
              <button onClick={onClose} className='absolute left-0 text-lg bg-none border-none'>
                ✖
              </button>
              <h2 className='font-semibold text-lg'>필터</h2>
            </div>
          </header>

          {/* 모달 내용 - 스크롤 가능 영역 */}
          <div className='flex-1 overflow-y-auto mb-4'>
            <div className='pb-6'>
              <h2 className='text-md font-semibold pb-2'>
                <span>숙소유형</span>
              </h2>
              <div className='text-sm'>{statement}</div>
            </div>
            <div className='px-10'>
              <div className='grid grid-flow-col'>
                <button
                  className={`py-6 px-2 font-bold border black rounded-l-2xl ${selectedButton === 'all' ? 'bg-black text-white' : 'bg-white-200 text-black'}`}
                  onClick={() => {
                    handleButtonClick('all')
                    setStatement('방, 집 전체 등 원하는 숙소 유형을 검색해 보세요.')
                  }}
                >
                  모든 유형
                </button>
                <button
                  className={`py-6 px-8 border font-bold black rounded ${selectedButton === 'room' ? 'bg-black text-white' : 'bg-white-200 text-black'}`}
                  onClick={() => {
                    handleButtonClick('room')
                    setStatement('단독으로 사용하는 방이 있고, 공용 공간도 있는 형태입니다.')
                  }}
                >
                  방
                </button>
                <button
                  className={`py-6 px-2 border black font-bold rounded-r-2xl ${selectedButton === 'house' ? 'bg-black text-white' : 'bg-white-200 text-black'}`}
                  onClick={() => {
                    handleButtonClick('house')
                    setStatement('집 전체를 단독으로 사용합니다.')
                  }}
                >
                  집 전체
                </button>
              </div>
            </div>
          </div>

          {/* 모달 하단 - 버튼 영역 */}
          <footer className='flex border-t-2 justify-between items-center '>
            <button className='hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 rounded'>
              전체 해제
            </button>
            <button className='p-2 bg-black text-white rounded'>숙소 925개 보기</button>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default FilterModalComponent

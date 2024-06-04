import { useEffect, useState } from 'react'
import RoomTypeComponent from './RoomTypeComponent'
import PriceRangeComponent from './PriceRangeModalComponent'
import BedroomComponent from './Bedroomcomponent'

const FilterModalComponent = ({ isOpen, onClose }) => {
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
        <div className='w-[600px] max-h-[90vh] border-b-8 bg-white rounded-lg flex flex-col'>
          {/* 모달 상단 - 필터 제목 */}
          <header className='flex justify-between items-center border-b-2 border-solid border-gray-200'>
            <div className='w-full min-h-16 flex justify-center items-center px-3 relative'>
              <button onClick={onClose} className='absolute left-5 top-1.2 bg-none border-none'>
                ✖
              </button>
              <div>
                <h2 className='font-semibold flex-grow text-center'>필터</h2>
              </div>
            </div>
          </header>

          {/* 모달 내용 - 스크롤 가능 영역 */}
          <div className='flex-1 overflow-y-auto mb-4'>
            <RoomTypeComponent
              selectedButton={selectedButton}
              handleButtonClick={handleButtonClick}
            />
            <PriceRangeComponent />
            <BedroomComponent />
          </div>

          {/* 모달 하단 - 버튼 영역 */}
          <footer className='flex border-t-2 justify-between items-center border-t-2 border-solid border-gray-200 p-3'>
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

import { useEffect } from 'react'

function FilterModalComponent({ isOpen, onClose }) {
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

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='w-[600px] max-h-[90vh] border-b-8 bg-white rounded-lg p-5 flex flex-col'>
        {/* 모달 상단 - 필터 제목 */}
        <div className='flex justify-between items-center mb-4'>
          <div className='w-full flex justify-center relative'>
            <button onClick={onClose} className='absolute left-0 text-lg bg-none border-none'>
              ✖
            </button>
            <h2 className='font-semibold text-lg'>필터</h2>
          </div>
        </div>

        {/* 모달 내용 - 스크롤 가능 영역 */}
        <div className='flex-1 overflow-y-auto mb-4'>
          <h3 className='text-md font-semibold mb-2'>숙소 유형</h3>
          <div className='flex justify-around mb-4'>
            <button className='bg-gray-200 py-2 px-4 rounded'>모든 유형</button>
            <button className='bg-gray-200 py-2 px-4 rounded'>방</button>
            <button className='bg-gray-200 py-2 px-4 rounded'>집 전체</button>
          </div>
          <h3 className='text-md font-semibold mb-2'>가격 범위</h3>
          <div className='mb-4'>
            <input type='range' min='14000' max='540000' className='w-full' />
            <div className='flex justify-between mt-2'>
              <span>₩14000</span>
              <span>₩540000+</span>
            </div>
          </div>
          <h3 className='text-md font-semibold mb-2'>침실과 침대</h3>
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>{' '}
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>{' '}
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>{' '}
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>{' '}
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>{' '}
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>{' '}
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>{' '}
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>
          <div className='mb-4'>
            <label>
              <input type='checkbox' className='mr-2' />
              침실 전체 해제
            </label>
          </div>
        </div>

        {/* 모달 하단 - 버튼 영역 */}
        <div className='flex justify-between items-center'>
          <button className='p-2 bg-gray-200 rounded'>전체 해제</button>
          <button className='p-2 bg-black text-white rounded'>숙소 925개 보기</button>
        </div>
      </div>
    </div>
  )
}

export default FilterModalComponent

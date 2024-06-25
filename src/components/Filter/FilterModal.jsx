import React, { useContext, useEffect } from 'react'
import RoomType from './RoomType'
import PriceRange from './PriceRangeModal'
import Bedroom from './Bedroom'
import { FilterContext } from './FilterContext'
import { useRouter, usePathname } from 'next/navigation'

const FilterModalComponent = ({ isOpen, onClose }) => {
  // const { filters, handleResetFilters, applyFilters } = useContext(FilterContext)
  // const router = useRouter() // useRouter 훅 사용
  // const pathname = usePathname() // 현재 경로 가져오기

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

  const handleApplyFilters = () => {
    const filteredData = applyFilters() // 필터링된 데이터 얻기
    console.log(filteredData) // 필터링된 데이터 콘솔에 출력

    // 1. URL QueryString 쓰기
    // 2. <Link> 써서 덕용님한테 보내기.
    // <Link href={`/s${selectedCity}?${queryString}`>
    // </Link>

    // Logic 짜야 할 순서
    // 1. usePathname();// 현재 내 URL 판단한다. /s/가 있는지 없는지 판단해서 분기 설정(있으면 덕용님, 없으면 희정 형님 또는 내가 렌더링)
    // 2. /s/ 있으면 URL QueryString 만들어서 내가 가지고 있는 상태값들 다 넣기
    // 3. <Link>써서 더굥님한테 보내기, 없으면 희정형님한테 보낸다.

    // // 1. URL QueryString 쓰기
    // const queryString = new URLSearchParams({
    //   roomType: filters.roomType,
    //   minPrice: filters.priceRange.min,
    //   maxPrice: filters.priceRange.max,
    //   bedRooms: filters.bedrooms['침실'],
    //   beds: filters.bedrooms['침대'],
    //   bathRooms: filters.bedrooms['욕실'],
    // }).toString()

    // // 2. 현재 경로에 따라 분기 처리
    // if (pathname.includes('/s/')) {
    //   router.push(`/s/?${queryString}`) // /s 경로가 있으면 덕용님 페이지로 이동
    // }

    onClose() // 모달 닫기
  }

  if (!isOpen) return null

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
            <RoomType />
            <PriceRange />
            <Bedroom />
          </div>

          {/* 모달 하단 - 버튼 영역 */}
          <footer className='flex border-t-2 justify-between items-center border-t-2 border-solid border-gray-200 p-3'>
            <button
              className='hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 rounded'
              onClick={handleResetFilters}
            >
              전체 해제
            </button>
            <button className='p-2 bg-black text-white rounded' onClick={handleApplyFilters}>
              숙소 {filters.filteredData.length}개 보기
            </button>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default FilterModalComponent

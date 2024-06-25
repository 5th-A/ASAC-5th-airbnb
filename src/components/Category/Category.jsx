'use client'
import { useState } from 'react'
import example from '@/data/category.json'

import nextArrow from '/public/assets/nextArrow.svg'
import prevArrow from '/public/assets/prevArrow.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import filter from '/public/assets/filter.svg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

import FilterModalComponent from '../Filter/FilterModal' // Make sure the path is correct
import { FilterProvider } from '../Filter/FilterContext'

function ButtonComponent({ button }) {
  return (
    <li style={{ listStyleType: 'none', height: '90px', margin: '0' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <div
          key={button.id}
          className='w-10 h-[49px] flex-col justify-start items-center gap-2 inline-flex'
        >
          <div className='w-6 h-6 justify-center items-center inline-flex' />
          <div
            className='flex-col justify-start items-start gap-4 flex'
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <img
              style={{
                width: '24px',
                height: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              src={button.icon}
              alt={button.text}
            />
            <div
              style={{ width: '90px', height: '16px', textAlign: 'center' }}
              className="text-neutral-500 text-sm font-['SF Pro']"
            >
              {button.text}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Category() {
  const [buttonInfo, setButtonInfo] = useState(example)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleWheel = (swiper, event) => {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      // 수평 스크롤인 경우 Swiper가 이벤트를 처리하도록 허용
      swiper.mousewheel.enable()
    } else {
      // 수직 스크롤인 경우 이벤트를 막음
      event.preventDefault()
      swiper.mousewheel.disable()
    }
  }

  // 필터 버튼을 눌렀을 때 모달창을 띄워준다.
  const handleFilterClick = () => {
    setIsModalOpen(true)
  }

  // 모달에서 닫기 버튼을 눌러주면 모달창을 닫아준다.
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='w-full  bg-white z-30 flex items-center justify-between px-[80px]'>
      <div className='flex items-center' style={{ width: 'calc(100% - 86px)', height: '90px' }}>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
          }}
          mousewheel={true}
          slidesPerView={12}
          slidesPerGroup={12}
          spaceBetween={10}
          modules={[Navigation, Keyboard]}
          className='mySwiper'
          autoHeight={true}
          onWheel={(swiper, event) => handleWheel(swiper, event)}
        >
          <ul style={{ display: 'flex', padding: '0', margin: '0' }}>
            {buttonInfo.map((button, idx) => (
              <SwiperSlide key={idx}>
                <ButtonComponent button={button} />
              </SwiperSlide>
            ))}
          </ul>
          <div className='swiper-button-prev w-7 h-7'>
            <img src={prevArrow.src} alt='이전' />
          </div>
          <div className='swiper-button-next w-7 h-7'>
            <img src={nextArrow.src} alt='다음' />
          </div>
        </Swiper>
      </div>
      {/* 버튼 크기 변경 */}
      <div className='flex items-center justify-center border rounded-xl border-black border-solid py-[7px] px-0.25 mt-5'>
        <button
          className='flex flex-row w-[80px] h-[32px] items-center justify-center'
          onClick={handleFilterClick}
        >
          <img src={filter.src} className='w-[16px] h-[16px] mr-1' />
          <div className='text-xs'>필터</div>
        </button>
      </div>
      {/* <FilterProvider> */}
      <FilterModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
      {/* </FilterProvider> */}
    </div>
  )
}

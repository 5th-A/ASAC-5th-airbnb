'use client'
import { useEffect, useState } from 'react'
import nextArrow from '/public/assets/nextArrow.svg'
import prevArrow from '/public/assets/prevArrow.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import filter from '/public/assets/filter.svg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import FilterModalComponent from '../Filter/FilterModal'
function ButtonComponent({ button, setSelectedId }) {
  return (
    <li style={{ listStyleType: 'none', height: '90px', margin: '0' }}>
      <div
        onClick={() => setSelectedId}
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
              alt={button.name}
            />
            <div
              style={{ width: '90px', height: '16px', textAlign: 'center' }}
              className="text-neutral-500 text-sm font-['SF Pro']"
            >
              {button.name}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

// 선택된 아이디 값에 해당하는 카테고리 불러오는 로직 추가
const Category = ({ id, setSelectedId }) => {
  const [buttonInfo, setButtonInfo] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/Category.json')
      const data = await response.json()
      setButtonInfo(data)
    }
    fetchData()
  }, [id])

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

  const handleFilterClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='w-full bg-white z-30 flex items-center justify-between px-[80px]'>
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
                <ButtonComponent button={button} setSelectedId={setSelectedId} />
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
      <div className='flex items-center justify-center border rounded-xl border-black border-solid py-[7px] px-0.25 mt-5'>
        <button
          className='flex flex-row w-[80px] h-[32px] items-center justify-center'
          onClick={handleFilterClick}
        >
          <img src={filter.src} className='w-[16px] h-[16px] mr-1' />
          <div className='text-xs'>필터</div>
        </button>
      </div>
      <FilterModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}
export default Category

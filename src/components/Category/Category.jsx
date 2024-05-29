'use client'
import { useState } from 'react'
import example from '@/data/category.json'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'

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

  return (
    <div style={{ width: '100%', height: '90px', padding: '0 80px' }}>
      <div style={{ display: 'flex', height: '90px' }}>
        <Swiper
          navigation={true}
          mousewheel={true}
          slidesPerView={12}
          slidesPerGroup={12}
          spaceBetween={10}
          modules={[Navigation, Mousewheel, Keyboard]}
          className='mySwiper'
          autoHeight={true}
          style={{ height: '90px' }}
          onWheel={(swiper, event) => handleWheel(swiper, event)}
        >
          <ul style={{ display: 'flex', padding: '0', margin: '0' }}>
            {buttonInfo.map((button, idx) => (
              <SwiperSlide key={idx}>
                <ButtonComponent button={button} />
              </SwiperSlide>
            ))}
          </ul>
        </Swiper>
      </div>
    </div>
  )
}

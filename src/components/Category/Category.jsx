import { useState } from 'react'
import example from './category.json'
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
          justifyContent: 'center', // 수직 중앙 정렬 추가
          height: '100%', // 전체 높이 사용
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

  return (
    <div style={{ width: '100%', height: '90px', padding: '0 80px' }}>
      <div style={{ display: 'flex', height: '90px' }}>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          slidesPerView={12}
          spaceBetween={10}
          modules={[Navigation, Mousewheel, Keyboard]}
          className='mySwiper'
          autoHeight={true}
          style={{ height: '90px' }} // Swiper의 height를 부모 div와 일치시키기
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

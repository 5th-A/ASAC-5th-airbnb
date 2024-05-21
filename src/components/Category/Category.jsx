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
    <li style={{ listStyleType: 'none', margin: '0 10px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          key={button.id}
          className='w-10 h-[49px] flex-col justify-start items-center gap-2 inline-flex'
        >
          <div className='w-6 h-6 justify-center items-center inline-flex' />
          <div className='flex-col justify-start items-start gap-4 flex'>
            <div className="text-neutral-500 text-sm font-['SF Pro']">{button.text}</div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Category() {
  const [buttonInfo, setButtonInfo] = useState(example)

  return (
    <div style={{ width: '100%', height: '90px', padding: '0 80px', border: '2px solid red' }}>
      <div style={{ display: 'flex', height: '78px' }}>
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
        >
          {buttonInfo.map((button, idx) => (
            <SwiperSlide key={idx}>
              <ButtonComponent button={button} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <button>filter</button>
        </div>
      </div>
    </div>
  )
}

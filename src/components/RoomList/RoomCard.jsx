import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import emptyHeart from '../../assets/likeButton_empty.svg'
import fullHeart from '../../assets/likeButton_full.svg'
import nextArrow from '../../assets/nextArrow.svg'
import prevArrow from '../../assets/prevArrow.svg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './RoomCard.css'

export default function RoomCard({ imgSrc, price, roomAddress, guestPrefer }) {
  console.log(roomAddress)
  const [isLike, setIsLike] = useState(emptyHeart)
  const imgList = imgSrc.map((img) => {
    return (
      <SwiperSlide key={img.id}>
        <img className='rounded-2xl' src={img.url} />
      </SwiperSlide>
    )
  })
  function formatPrice(price) {
    return new Intl.NumberFormat().format(price)
  }

  return (
    <>
      {/*Image slider*/}
      <div className='flex flex-col'>
        <div className='relative'>
          <Swiper
            className='swiper'
            modules={[Pagination, Navigation]}
            // 슬라이더 다음, 이전 버튼 설정
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              disabledClass: 'swiper-button-disabled',
            }}
            spaceBetween={50}
            slidesPerView={1}
            // 슬라이더 하단 도트설정
            pagination={{
              dynamicBullets: true,
            }}
            watchSlidesProgress
          >
            {imgList}
            <div className='swiper-button-prev w-7 h-7'>
              <img src={prevArrow}></img>
            </div>
            <div className='swiper-button-next w-7 h-7'>
              <img src={nextArrow}></img>
            </div>
          </Swiper>
          {guestPrefer && (
            <div className='absolute top-1 left-2 mt-3 p-1.5 z-10 rounded-2xl font-semibold bg-white text-[14px]'>
              게스트 선호
            </div>
          )}

          <button className='absolute top-3 right-2 p-2 z-10'>
            <img
              src={isLike}
              onClick={() => {
                setIsLike(isLike === emptyHeart ? fullHeart : emptyHeart)
              }}
              className='w-5 h-5'
            ></img>
          </button>
        </div>
        {/*Room Info*/}
        <div className='py-4'>
          <div className='flex justify-between items-center'>
            <div className='font-bold text-xl truncate mb-1 w-[80%]'>{roomAddress}</div>
            <div className='text-sm font-semibold text-gray-700'>★ 5.00</div>
          </div>
          <div className='text-gray-700 text-base'>겁나 멀어요</div>
          <div className='text-gray-700 text-base'>여기는 기간</div>
        </div>

        {/*Room cost*/}
        <div className='pb-2 flex items-center'>
          <div className='inline-bloc py-1 text-sm font-semibold text-gray-700 mr-2'>
            ₩{formatPrice(price)}
          </div>
          <span className='text-sm'> /박</span>
        </div>
      </div>
    </>
  )
}

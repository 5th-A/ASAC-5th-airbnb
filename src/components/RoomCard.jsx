import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import emptyHeart from '../image/LikeButton/heart.png'
import fullHeart from '../image/LikeButton/fullheart.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './RoomCard.css'

export default function RoomCard() {
  const [isLike, setIsLike] = useState(emptyHeart)
  return (
    <>
      {/*Image slider*/}
      <div className='max-w-sm overflow-hidden'>
        <div className='relative px-2 py-2'>
          <Swiper
            className='swiper'
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              disabledClass: 'swiper-button-disabled',
            }}
            spaceBetween={50}
            slidesPerView={1}
            pagination
            watchSlidesProgress
          >
            {/*더미데이터 생기면 map으로 불러오게 수정*/}
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x145' alt='Room view 1' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x145' alt='Room view 2' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x145' alt='Room view 3' />
            </SwiperSlide>
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
          </Swiper>
          <button className='absolute top-6 right-5 p-2 z-10'>
            <img
              src={isLike}
              onClick={() => {
                const isLiked = isLike
                if (isLiked === emptyHeart) {
                  setIsLike(fullHeart)
                } else {
                  setIsLike(emptyHeart)
                }
              }}
              className='w-7 h-7'
            ></img>
          </button>
        </div>
        {/*Room Info*/}
        <div className='px-6 py-4'>
          <div className='flex justify-between items-center'>
            <div className='inline-block font-bold text-xl mb-1'>한국 어딘가</div>
            <div className='inline-block text-sm font-semibold text-gray-700'>★ 5.00</div>
          </div>
          <div className='text-gray-700 text-base'>겁나 멀어요</div>
          <div className='text-gray-700 text-base'>여기는 기간</div>
        </div>

        {/*Room cost*/}
        <div className='px-5 pt-4 pb-2 flex justify-between items-center'>
          <div className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>₩999,999/박</div>
        </div>
      </div>
    </>
  )
}

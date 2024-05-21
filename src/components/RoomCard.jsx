import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './RoomCard.css'

export default function RoomCard() {
  return (
    <>
      {/*Image slider*/}
      <div className='max-w-sm overflow-hidden shadow-lg '>
        <div className='relative px-2 py-2'>
          <Swiper
            className='swiper'
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={50}
            slidesPerView={1}
            pagination
          >
            {/*더미데이터 생기면 map으로 불러오기*/}
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

import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import emptyHeart from '../../assets/likeButton_empty.svg'
import fullHeart from '../../assets/likeButton_full.svg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './RoomCard.css'

export default function RoomCard() {
  const [isLike, setIsLike] = useState(emptyHeart)
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
            {/*더미데이터 생기면 map으로 불러오게 수정*/}
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='rounded-2xl' src='http://placehold.it/110x110' />
            </SwiperSlide>
            <div className='swiper-button-prev w-7 h-7'></div>
            <div className='swiper-button-next w-7 h-7'></div>
          </Swiper>
          <button className='absolute top-2 right-2 p-2 z-10'>
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
              className='w-5 h-5'
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
        <div className='px-5 pb-2 flex justify-between items-center'>
          <div className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            ₩999,999/박
          </div>
        </div>
      </div>
    </>
  )
}

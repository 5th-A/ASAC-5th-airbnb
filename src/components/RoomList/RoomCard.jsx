'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './RoomCard.css'
import Image from 'next/image'

export default function RoomCard({ imgSrc, price, roomAddress, guestPrefer, date }) {
  const emptyHeart = '/assets/likeButton_empty.svg'
  const fullHeart = '/assets/likeButton_full.svg'
  const nextArrow = '/assets/nextArrow.svg'
  const prevArrow = '/assets/prevArrow.svg'
  const [isLike, setIsLike] = useState(emptyHeart)
  const imgList = imgSrc.map((img) => {
    return (
      <SwiperSlide key={img.id}>
        <Image
          className='rounded-2xl w-full h-auto'
          src={img.url}
          fill
          sizes='(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw'
          alt='room picture'
        />
      </SwiperSlide>
    )
  })

  function formatPrice(price) {
    return new Intl.NumberFormat().format(price)
  }

  //Link작동 방지하면서 isLike 상태 관리
  function blockLink(e) {
    //기본동작(Link href) 방지
    e.preventDefault()
    setIsLike(isLike === emptyHeart ? fullHeart : emptyHeart)
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
              <Image src={prevArrow} width={28} height={28} alt='prev arrow button' />
            </div>
            <div className='swiper-button-next w-7 h-7'>
              <Image src={nextArrow} width={28} height={28} alt='next arrow button' />
            </div>
          </Swiper>
          {guestPrefer && (
            <div className='absolute top-1 left-2 mt-3 p-1.5 z-10 rounded-2xl font-semibold bg-white text-[14px]'>
              게스트 선호
            </div>
          )}

          <button className='absolute top-3 right-2 p-2 z-10'>
            <Image src={isLike} onClick={blockLink} width={20} height={20} alt='like button' />
          </button>
        </div>
        {/*Room Info*/}
        <div className='py-4'>
          <div className='flex justify-between items-center'>
            <div className='font-bold text-xl truncate mb-1 w-[80%]'>{roomAddress}</div>
            <div className='text-sm font-semibold text-gray-700'>★ 5.00</div>
          </div>
          <div className='text-gray-700 text-base'>겁나 멀어요</div>
          <div className='text-gray-700 text-base'>{date}</div>
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

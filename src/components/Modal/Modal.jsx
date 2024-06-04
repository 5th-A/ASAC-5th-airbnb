'use client'
import Image from 'next/image'
import CommentJson from '@/data/comment.json'
import { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
const data = CommentJson

function dateCalculate(dateString) {
  const nowdate = new Date()
  const [year, month, day] = dateString.split('-')
  const givenDate = new Date(year, month - 1, day) // 월은 0부터 시작하기 때문에 -1 필요
  const timeDiff = nowdate - givenDate // 밀리초 단위 차이
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) // 일 단위 차이
  const weekDiff = Math.ceil(dayDiff / 7) // 주 단위 차이

  if (dayDiff < 1) {
    return '오늘'
  } else if (dayDiff < 7) {
    return `${dayDiff}일 전`
  } else if (weekDiff < 4) {
    return `${weekDiff}주 전`
  } else {
    return `${year}년 ${month}월`
  }
}

const Modal = ({ show, onClose, id }) => {
  const dataSeg = data.find((each) => each.id == id)
  if (!show) {
    return null
  }
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [show])

  return (
    <>
      <div className='fixed  z-50 inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center py-10 '>
        <div className='p-5 z-20 bg-white rounded w-3/5 h-full  text-black overflow-scroll overflow-x-hidden rounded-xl'>
          <div className='mb-5'>
            <button onClick={onClose} className=' text-lg top-5 left-5'>
              X
            </button>
          </div>
          <div className='mb-7'>
            <div className=' text-7xl font-extrabold flex justify-center items-center'>
              {dataSeg.average}
            </div>
          </div>
          <div className=''>
            <div className=' flex justify-between mb-10 '>
              <span className='text-2xl font-bold'>후기 {dataSeg?.comment?.length || 0} 개 </span>
              <button className='border-black border-solid border-[1px] rounded-2xl px-4 focus:border-[3px]'>
                최신순
              </button>
            </div>
            <div className='mb-8 h-[40px] border-[1px] border-black border-solid rounded-2xl flex  justify-start items-center gap-5 px-4 focus-within:border-[3px]'>
              <Image
                src='/assets/svg-export/search.svg'
                width={16}
                height={16}
                alt='돋보기'
                className='w-[16px] h-[16px] focus:border-[3px] cursor-text'
              />
              <input
                type='text'
                placeholder='후기 검색'
                className='w-full border-none focus:border-[3px]'
              />
            </div>
          </div>

          <div className=''>
            {(dataSeg?.comment || []).map((each, index) => {
              return (
                <div key={index} className=''>
                  <div className=' px-2 w-[400px] h-[190px]  mr-[64px]'>
                    <div className='fr3-1 flex gap-3 mb-2'>
                      <div className='relative w-[48px] h-[48px]'>
                        <Image
                          className='rounded-3xl'
                          alt='프로필사진'
                          layout='fill'
                          objectFit='cover'
                          src={each.profile}
                        />
                      </div>
                      <div className='flex-col content-center'>
                        <div className='h-[20px] font-semibold'>{each.name}</div>
                        <div className='h-[18px]'>{each.location}</div>
                      </div>
                    </div>

                    <div className='fr3-2 flex mb-2 w-[400px] h-[18px]'>
                      <div className='flex gap-0.5 justify-center items-center'>
                        {/* 여기 하드 코딩 반복문으로 rate 만큼 출력하도록 */}
                        {Array.from({ length: Number(each.rate) }, (_, i) => (
                          <FaStar key={i} size='13' color='black' />
                        ))}
                      </div>
                      <div className='px-[5px]'>
                        <span>·</span>
                      </div>
                      <div>{dateCalculate(each.date)}</div>
                    </div>

                    <div className='fr3-3 '>
                      <span className=''>{each.msg}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

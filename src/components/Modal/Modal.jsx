'use client'

import Image from 'next/image'
import CommentJson from '@/data/comment.json'
import { useEffect, useRef, useState } from 'react'
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
  const [sortType, setSortType] = useState('latest')
  const [sortedData, setSortedData] = useState([])
  const dataSeg = data.find((each) => each.id == id)
  const modalRef = useRef(null)

  // 최신순, 오래된 순으로 정렬해야됨
  // JSON의 데이터 타입이 String이라서 Date로 인식 못함
  // 정렬하는 함수 작성했는데 적용 안되고 콘솔 안찍힘
  // console.log('data', sortedData)

  const getSortedData = () => {
    return (dataSeg?.comment || []).sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)

      console.log('- 5 - ' + sortType)
      if (sortType === 'oldest') {
        return dateA - dateB // 오래된 순
      } else {
        return dateB - dateA // 최신 순
      }
    })
  }

  useEffect(() => {
    console.log('- 2 - ' + JSON.stringify(dataSeg))
    if (dataSeg) {
      console.log('- 3 - ' + JSON.stringify(dataSeg))
      const sorted = getSortedData()
      console.log('- 6.1 - ' + JSON.stringify(sorted[0]))

      console.log('- 6.2 - ' + JSON.stringify(sorted[1]))
      //console.log('Sorted Data:', sorted) // 콘솔에 정렬된 데이터 출력
      setSortedData(sorted)
    }
  }, [sortType, dataSeg, id])

  const onChangeSortType = (e) => {
    const exam = e.target.value
    console.log('- 1 - ' + exam)
    setSortType(exam)
  }

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [show, onClose])

  if (!show) {
    return null
  }

  return (
    <>
      <div className='fixed  z-50 inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center py-10 '>
        <div
          ref={modalRef}
          className='px-5 z-20 bg-white rounded w-3/5 h-full  text-black overflow-scroll overflow-x-hidden rounded-xl'
        >
          <div className='sticky top-0 bg-white z-10 pt-5'>
            <div className='mb-5'>
              <button onClick={onClose} className='text-lg top-5 left-5'>
                X
              </button>
            </div>
            <div className='mb-7'>
              <div className='text-7xl font-extrabold flex justify-center items-center'>
                {dataSeg.average}
              </div>
            </div>
            <div className=''>
              <div className='flex justify-between mb-10'>
                <span className='text-2xl font-bold'>후기 {dataSeg?.comment?.length || 0} 개 </span>
                <select
                  onChange={onChangeSortType}
                  className='border-black border-solid border-[1px] rounded-2xl px-4 focus:border-[3px]'
                >
                  <option value={'latest'}>최신순</option>
                  <option value={'oldest'}>오래된 순</option>
                  <Image
                    className='pr-10'
                    src='/assets/header/global.svg'
                    width={12}
                    height={12}
                    alt='화살표'
                  />
                </select>
              </div>
              <div className='mb-8 h-[40px] border-[1px] border-black border-solid rounded-2xl flex justify-start items-center gap-5 px-4 focus-within:border-[3px]'>
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
          </div>

          <div className=''>
            {sortedData.map((each, index) => (
              <div key={index} className=''>
                <div className='px-2 w-full h-full mb-10'>
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
                      {Array.from({ length: Number(each.rate) }, (_, i) => (
                        <FaStar key={i} size='13' color='black' />
                      ))}
                    </div>
                    <div className='px-[5px]'>
                      <span>·</span>
                    </div>
                    <div>{dateCalculate(each.date)}</div>
                  </div>

                  <div className='fr3-3'>
                    <span>{each.msg}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

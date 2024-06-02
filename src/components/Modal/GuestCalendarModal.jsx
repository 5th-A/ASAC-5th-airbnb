'use client'

import { useDispatch, useSelector } from 'react-redux'
import CalendarContainer from '../Calendar/CalendarContainer'
import { setSelectedStartDate, setSelectedEndDate, resetDates } from '@/redux/slices/calendarSlice'
import { useEffect, useRef } from 'react'

export default function GuestCalendarModal({ isCalendarOpen, setIsCalendarOpen }) {
  const modalRef = useRef()
  const dispatch = useDispatch()
  const { selectedStartDate, selectedEndDate, selectedDatesText } = useSelector(
    (state) => state.setCalendar,
  )
  function calculateNights(start, end) {
    const msInDay = 24 * 60 * 60 * 1000
    return Math.round((end - start) / msInDay)
  }
  function formatDate(date) {
    const d = new Date(date)
    return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}`
  }
  useEffect(() => {
    const outSideClick = (e) => {
      if (isCalendarOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        setIsCalendarOpen(false)
      }
    }
    document.addEventListener('mousedown', outSideClick)
    return () => {
      document.removeEventListener('mousedown', outSideClick)
    }
  }, [setIsCalendarOpen])
  return (
    <>
      <div
        ref={modalRef}
        className='w-[661px] px-8 pt-6 pb-4 absolute z-50 right-0 shadow-md bg-white border border-solid rounded-xl border-gray-300'
      >
        <div className='min-w-[260px] flex flex-row justify-between'>
          <div>
            {selectedStartDate !== null && selectedEndDate !== null ? (
              <>
                <h2 className='font-semibold text-[22px]'>
                  {calculateNights(selectedStartDate, selectedEndDate)}박
                </h2>
                <div>{`${formatDate(selectedStartDate)} - ${formatDate(selectedEndDate)}`}</div>
              </>
            ) : (
              <>
                <h2 className='font-semibold text-[22px]'>날짜 선택</h2>
                <div className='whitespace-normal text-[14px] text-gray-700'>
                  여행 날짜를 입력하여 정확한 요금을 확인하세요.
                </div>
              </>
            )}
          </div>
          <div className='flex items-center min-w-[339px] min-h-[56px] justify-center'>
            <div className='ml-auto h-full flex items-center justify-end border border-solid border-gray-400 rounded-2xl '>
              <div className='min-w-[157.5px] flex flex-col border-r border-solid border-gray-400 py-4 pl-3'>
                <div className='text-[10px] text-left'>체크인</div>
                <div className='text-[14px] text-left'>
                  {selectedStartDate !== null ? formatDate(selectedStartDate) : '날짜선택'}
                </div>
              </div>
              <div className='min-w-[157.5px] flex flex-col py-4 pl-3'>
                <div className='text-[10px] text-left'>체크아웃</div>
                <div className='text-[14px] text-left'>
                  {selectedEndDate !== null ? formatDate(selectedEndDate) : '날짜선택'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='min-h-[340px]'>
            <CalendarContainer
              visibleCalendars={2}
              selectedStartDate={selectedStartDate}
              setSelectedStartDate={(date) => dispatch(setSelectedStartDate(date))}
              selectedEndDate={selectedEndDate}
              setSelectedEndDate={(date) => dispatch(setSelectedEndDate(date))}
            />
          </div>
          <div className='space-x-5 ml-auto'>
            <button
              className='text-[14px] underline font-semibold'
              onClick={() => {
                dispatch(resetDates())
              }}
            >
              날짜 지우기
            </button>
            <button
              className='bg-black text-white border border-solid border-black rounded-xl font-semibold p-2'
              onClick={() => {
                setIsCalendarOpen((prev) => !prev)
              }}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

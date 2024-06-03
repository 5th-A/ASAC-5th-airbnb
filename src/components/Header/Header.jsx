'use client'

import Link from 'next/link'
import SearchBar from '../SearchBar/SearchBar'
import SignUpModal from '../Modal/SignUpModal'
import { useState } from 'react'

function Header() {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <div className='flex justify-between items-center h-20 w-full px-10 z-20 bg-white border-b border-gray-200'>
        <div>
          <Link href={'/'}>
            <img className='w-28 h-8' src='/assets/header/airbnbLogo.svg' />
          </Link>
        </div>
        <div className='flex gap-6 px-3.5 ml-36'>
          <button className='bg-none border-none outline-none focus:font-bold'>숙소</button>
          <button className='bg-none border-none focus:font-bold'>체험</button>
          <button className='bg-none border-none focus:font-bold'>온라인체험</button>
        </div>
        <div className='flex items-center gap-6'>
          <div className='text-neutral-800 text-sm font-black'>당신의 공간을 에어비앤비하세요</div>
          <div className='relative flex items-center'>
            <a href='#'>
              <svg
                width='16'
                height='16'
                fill='currentcolor'
                display='block'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                aria-hidden='true'
                role='presentation'
                focusable='false'
              >
                <path d='M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z'></path>
              </svg>
            </a>
          </div>
          <button
            onClick={() => {
              setIsShow(true)
            }}
            className='w-22 h-12 border rounded-full border-gray-200 py-2 pr-2 pl-3.5 flex justify-center items-center gap-3'
          >
            <SignUpModal
              isShow={isShow}
              closeModal={() => {
                setIsShow(false)
              }}
            />
            <svg
              display='block'
              fill='none'
              height='16px'
              width='16px'
              stroke='currentcolor'
              strokeWidth='3'
              overflow='visible'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              aria-hidden='true'
              role='presentation'
              focusable='false'
            >
              <g fill='none'>
                <path d='M2 16h28M2 24h28M2 8h28'></path>
              </g>
            </svg>

            <svg
              display='block'
              height='100%'
              width='100%'
              fill='gray'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
              aria-hidden='true'
              role='presentation'
              focusable='false'
            >
              <path d='M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z'></path>
            </svg>
          </button>
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
        <SearchBar />
      </div>
    </>
  )
}

export default Header

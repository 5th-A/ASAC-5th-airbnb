'use client'

import Link from 'next/link'
import Image from 'next/image'
import SmallSearchBar from '../SearchBar/SmallSearchBar'
import { useState } from 'react'
import SignUpModal from '@/components/Modal/SignUpModal'

function SmallHeader() {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className='w-full justify-center'>
      <div className='flex justify-between items-center min-h-[80px] bg-white border-solid  border-b border-gray-200 px-20'>
        <div className='w-1/3 flex-grow'>
          <Link href={'/'}>
            <Image src='/assets/header/airbnbLogo.svg' width={102} height={32} alt='airbnb_Logo' />
          </Link>
        </div>
        <div className='w-1/3 flex-grow justify-center items-center  flex px-3.5 '>
          <SmallSearchBar />
        </div>
        <div className='w-1/3 flex-grow'>
          <div className='Login h-[38px] justify-end items-center gap-6 flex'>
            <div className='BecomeAHost text-neutral-800 text-sm font-black min-w-[206px]'>
              당신의 공간을 에어비앤비하세요
            </div>
            <div className='Globe Frame20 w-4 h-4 relative flex-col justify-start items-start inline-flex'>
              <div>
                <Image src='/assets/header/global.svg' width={16} height={16} alt='국가선택' />
              </div>
            </div>

            <button
              onClick={() => {
                setIsShow(true)
              }}
              className='Frame relative max-w-[86px] max-h-[48px] border  rounded-[29px] border-gray-200 py-2 pr-2 pl-3.5 inline-flex justify-center items-center gap-3 '
            >
              <SignUpModal
                isShow={isShow}
                closeModal={() => {
                  setIsShow(false)
                }}
              />
              <Image src='/assets/header/loginMenu.svg' width={16} height={16} alt='menuButton' />

              <Image
                src='/assets/header/defaultprofile.svg'
                width={32}
                height={32}
                alt='기본프로필'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallHeader

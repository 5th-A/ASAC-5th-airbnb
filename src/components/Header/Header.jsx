'use client'

import Link from 'next/link'
import { useState } from 'react'
import SearchBar from '@/components/SearchBar/MainSearchBar/SearchBar'
import Providers from '@/redux/Providers'
import SignUpModal from '@/components/Modal/SignUpModal'
import Image from 'next/image'

function Header() {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className='flex w-full flex-col justify-between items-center border-solid border-b border-gray-200'>
      <div className='flex w-full justify-between items-center  px-5 py-4'>
        <div className='w-1/3 flex-grow top-0'>
          <Link href={'/'}>
            <img className='w-[102px] h-[32px]' src='/assets/header/airbnbLogo.svg' />
          </Link>
        </div>
        <div className='justify-between w-1/3 flex-grow items-center gap-6 flex-col px-3.5'>
          <div className='w-full flex justify-center items-center  min-h-[38px] '>
            <button className='mx-4 my-2.5 bg-none border-none outline-none focus:font-black '>
              숙소
            </button>
            <button className='mx-4 my-2.5 bg-none  border-none focus:font-black'>체험</button>
            <button className='mx-4 my-2.5 bg-none  border-none focus:font-black'>
              온라인체험
            </button>
          </div>
        </div>
        <div className='flex justify-end w-1/3 flex-grow'>
          <div className='Login  h-[38px] items-center gap-6 inline-flex'>
            <div className='BecomeAHost text-neutral-800 text-sm font-black '>
              당신의 공간을 에어비앤비하세요
            </div>
            <div className='Globe Frame20 w-4 h-4  flex-col justify-start items-start inline-flex'>
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
      <div className='w-full flex justify-center items-center pb-2'>
        <Providers>
          <SearchBar />
        </Providers>
      </div>

      {/* <Category /> */}
    </div>
  )
}

export default Header

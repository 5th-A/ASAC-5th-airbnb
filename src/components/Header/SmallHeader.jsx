import Link from 'next/link'
import Image from 'next/image'
import SmallSearchBar from '../SearchBar/SmallSearchBar'

function SmallHeader() {
  return (
    <>
      <div className='flex justify-between items-center w-full min-h-[80px] z-20 bg-white border-solid  border-b border-gray-200 px-20'>
        <div className=''>
          <Link href={'/'}>
            <img className='w-[102px] h-[32px]' src='/assets/header/airbnbLogo.svg' />
          </Link>
        </div>
        <div className=' justify-center items-center  flex px-3.5 '>
          <SmallSearchBar />
        </div>
        <div>
          <div className='Login  h-[38px] justify-center items-center gap-6 inline-flex'>
            <div className='BecomeAHost text-neutral-800 text-sm font-black min-w-[206px]'>
              당신의 공간을 에어비앤비하세요
            </div>
            <div className='Globe Frame20 w-4 h-4 relative flex-col justify-start items-start inline-flex'>
              <div>
                <Image src='/assets/header/global.svg' width={16} height={16} alt='국가선택' />
              </div>
            </div>

            <button className='Frame w-[86px] h-[48px] border  rounded-[29px] border-gray-200 py-2 pr-2 pl-3.5 inline-flex justify-center items-center gap-3 '>
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
    </>
  )
}

export default SmallHeader

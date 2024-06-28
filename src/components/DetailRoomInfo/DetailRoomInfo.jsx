import AccommodationDetails from '@/components/AccommodationDetails/AccommodationDetails'
import Calculator from '@/components/DetailRoomInfo/Calculator'

import Image from 'next/image'
import { redirect } from 'next/navigation'

function FilterInfo({ filter }) {
  const filterInfo = Object.entries(filter)
    .map(([key, value]) => {
      switch (key) {
        case 'maximum':
          return `최대 인원 ${value}명`
        case 'beds':
          return `침대 ${value}개`
        case 'bedRooms':
          return `침실 ${value}개`
        case 'bathRooms':
          return `화장실 ${value}개`
        default:
          return null
      }
    })
    .filter((info) => info !== null)
    .join(' · ')
  return <div>{filterInfo}</div>
}

function FilterCategory({ category, facilities }) {
  const categories = [category, ...facilities]
  return Object.entries(categories).map(([key, value]) => (
    <div key={value.id} className='flex gap-1'>
      <Image src={value.icon} width={20} height={20} alt='filtered_category_icon' />
      <div>{value.name}</div>
    </div>
  ))
}

function HostInfo({ hostInfo }) {
  function hostingYear(year) {
    const currentYear = new Date().getFullYear()
    return currentYear - year > 0 ? `${currentYear - year}년` : '1년 미만'
  }
  return (
    <div className='flex items-center py-6 border-t border-b border-gray-300 border-solid gap-x-6'>
      <div className='overflow-hidden w-10 h-10' style={{ borderRadius: '70%' }}>
        <Image src={hostInfo.user.profile} width={40} height={40} alt='host profile image' />
      </div>
      <div className='flex flex-col gap-y-1 '>
        <div className='font-semibold'>호스트: {hostInfo.user.name} 님</div>
        <div>
          <ol>
            {hostInfo.user.type === '슈퍼호스트' ? (
              <>
                <li className='float-left text-gray-500 text-sm'>{hostInfo.user.type}</li>
                <li className='float-left px-1 text-gray-500 text-sm'>{'·'}</li>
                <li className='float-left text-gray-500 text-sm'>
                  호스팅 경력 {hostingYear(hostInfo.user.year)}
                </li>
              </>
            ) : (
              <li className='text-sm'>호스팅 경력 {hostingYear(hostInfo.year)}</li>
            )}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default async function DetailRoomInfo({ id }) {
  const testStatus = 404
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || ''
  const resRoom = await fetch(`${baseURL}/RoomInfo.json`)
  if (resRoom.status !== 200) {
    redirect(`/error/${resRoom.status}`)
  }
  const roomDetailData = await resRoom.json()
  const resHost = await fetch(`${baseURL}/HostInfo.json`)
  if (resHost.status !== 200) {
    redirect(`/error/${resRoom.status}`)
  }
  const hostInfo = await resHost.json()

  const ROOM_ID = id // 추후 api 요청시 쿼리에 담아보내야함
  const FEE = 0.1552
  const guestPrefer_Left = '/assets/guestPrefer_Left.svg'
  const guestPrefer_Right = '/assets/guestPrefer_Right.svg'

  if (!roomDetailData) return <div>해당하는 방 정보를 찾을 수 없습니다.</div>

  return (
    <div className='flex w-full items-center justify-center border-b border-customGray border-solid'>
      <div className='flex flex-grow-1 w-full itemWrapper justify-between'>
        <div className='box-border w-[60%]'>
          <div className='py-2'>
            <h2 className='text-xl font-semibold'>
              {roomDetailData.address}, {roomDetailData.roomType}
            </h2>
            <FilterInfo filter={roomDetailData} />
          </div>
          {roomDetailData.guestPrefer && (
            <div className='flex py-5 px-7 border border-solid rounded-xl border-gray-300'>
              <div className='flex justify-center space-x-4'>
                <div
                  className='flex justify-center'
                  style={{ minWidth: '94px', maxHeight: '36px' }}
                >
                  <Image src={guestPrefer_Left} width={23} height={36} alt='guestPrefer_Left' />
                  <div className='font-semibold text-center px-1 pb-1' style={{ minWidth: '56px' }}>
                    게스트 <br /> 선호
                  </div>
                  <Image src={guestPrefer_Right} width={23} height={36} alt='guestPrefer_Right' />
                </div>
                <div
                  className='overflow-hidden whitespace-normal font-semibold flex items-center'
                  style={{ maxHeight: '48px' }}
                >
                  <p>에어비앤비 게스트에게 가장 사랑받는 숙소</p>
                </div>
              </div>
              <div
                className='flex-grow justify-center text-center px-4 border-r border-gray-300 border-solid'
                style={{ minWidth: '81px' }}
              >
                <div className='font-semibold text-[22px]'>4.89</div>
                <div>별개수</div>
              </div>
              <div className='mx-2'></div>
              <div
                className='flex-grow justify-between items-center text-center'
                style={{ minWidth: '52px' }}
              >
                <div className='font-semibold text-[18px]'>426개</div>
                <div className='text-[12px] underline underline-offset-1 '>후기</div>
              </div>
            </div>
          )}
          <div className='flex  pt-5 pb-8'>
            <div className='flex-grow '>
              <div className='width-[100%] grid grid-cols-2 grid-rows-3 gap-3 auto-rows-fr text-sm'>
                <FilterCategory
                  category={roomDetailData.category}
                  facilities={roomDetailData.facilities}
                />
              </div>
            </div>
          </div>
          <HostInfo hostInfo={hostInfo} />
          <div className='pt-8 pb-12 border-b whitespace-pre-line border-gray-300 border-solid'>
            {hostInfo.introduction}
          </div>
          <div className='pt-12 pb-12 '>
            <AccommodationDetails />
          </div>
        </div>
        <div className='flex relative'>
          <div className='ml-auto mt-8'>
            <Calculator price={roomDetailData.price} FEE={FEE} />
          </div>
        </div>
      </div>
    </div>
  )
}

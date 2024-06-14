import React from 'react'
import Image from 'next/image'
import roomDetail from '@/data/roomDetail.json'

function ButtonComponent({ buttonSrc, text }) {
  return (
    <button className='button flex items-center space-x-1 rounded-xl hover:bg-customGray p-2'>
      <Image src={buttonSrc} alt={text + ' 아이콘'} width={16} height={16} />
      <span className='text-sm'>{text}</span>
    </button>
  )
}

function ButtonGroup() {
  return (
    <div className='flex space-x-2 button-container min-w-[152px] min-h-[28px]'>
      <ButtonComponent buttonSrc='/assets/share.svg' text={'공유하기'} />
      <ButtonComponent buttonSrc='/assets/heart.svg' text={'저장하기'} />
    </div>
  )
}

const MainImage = ({ id }) => {
  const room = roomDetail[id]

  return (
    <div className='container mx-auto pt-12'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>{room.roomName}</h1>
        <ButtonGroup />
      </div>
      <div className='w-full pt-6 h-[400px]'>
        <div className='grid grid-cols-4 grid-rows-2 gap-4 h-full'>
          {room.RoomImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative ${
                index === 0
                  ? 'col-span-4 lg:col-span-2 row-span-2'
                  : 'col-span-1 lg:col-span-1 row-span-1'
              } image-container`}
            >
              <button className='w-full h-full p-0 border-none relative'>
                <Image
                  src={image.url}
                  alt={`Room ${index}`}
                  layout='fill'
                  objectFit='cover'
                  className='rounded'
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainImage

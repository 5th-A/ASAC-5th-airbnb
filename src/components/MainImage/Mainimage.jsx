import React from 'react'
import roomDetail from '@/data/roomDetail.json'
import shareIcon from '/public/assets/share.svg'
import heartIcon from '/public/assets/heart.svg'

function ButtonComponent({ buttonSrc, text }) {
  return (
    <button className='flex items-center space-x-1 p-2'>
      <img src={buttonSrc} alt={text + ' 아이콘'} className='h-4 w-4' />
      <span className='text-sm'>{text}</span>
    </button>
  )
}

function ButtonGroup() {
  return (
    <div className='flex space-x-2 button-container'>
      <ButtonComponent buttonSrc={shareIcon.src} text={'공유하기'} />
      <ButtonComponent buttonSrc={heartIcon.src} text={'저장하기'} />
    </div>
  )
}

const MainImage = () => {
  const room = roomDetail[0]

  return (
    <div className='container mx-auto flex flex-col items-center'>
      <div className='flex justify-between items-center w-full max-w-[1120px]'>
        <h1 className='text-2xl font-bold'>{room.roomName}</h1>
        <ButtonGroup />
      </div>
      <div style={{ width: '1120px', height: '324px' }} className='w-full pt-6'>
        <div className='grid grid-cols-4 grid-rows-2 gap-4 h-full'>
          {room.RoomImages.map((image, index) => (
            <div
              key={image.id}
              className={`col-span-1 lg:col-span-${index === 0 ? '2' : '1'} row-span-1 lg:row-span-${index === 0 ? '2' : '1'} image-container`}
            >
              <button className='w-full h-full p-0 border-none'>
                <img
                  src={image.url}
                  alt={`Room ${index}`}
                  className='w-full h-full object-cover rounded'
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

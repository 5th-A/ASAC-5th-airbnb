import React from 'react'
import roomDetail from './roomDetail.json'
import './style.css'
import shareIcon from '../../../assets/share.svg'
import heartIcon from '../../../assets/heart.svg'

const MainImage = () => {
  const room = roomDetail[0]

  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-bold'>{room.roomName}</h1>
        <div className='flex space-x-2 button-container' style={{ width: '140px', height: '28px' }}>
          <button className='button flex items-center space-x-1'>
            <img src={shareIcon} alt='공유하기 아이콘' className='h-4 w-4' />
            <span className='text-xs'>공유하기</span>
          </button>
          <button className='button flex items-center space-x-1'>
            <img src={heartIcon} alt='저장 아이콘' className='h-4 w-4' />
            <span className='text-xs'>저장</span>
          </button>
        </div>
      </div>
      <div style={{ width: '1120px', height: '324px' }} className='w-full'>
        <div className='grid grid-cols-4 grid-rows-2 gap-4 h-full'>
          <div className='col-span-4 lg:col-span-2 row-span-1 lg:row-span-2 image-container'>
            <img
              src={room.RoomImages[0].url}
              alt='Building'
              className='w-full h-full object-cover rounded'
            />
          </div>
          <div className='col-span-1 lg:col-span-1 row-span-1 lg:row-span-1 image-container'>
            <img
              src={room.RoomImages[1].url}
              alt='Room 1'
              className='w-full h-full object-cover rounded'
            />
          </div>
          <div className='col-span-1 lg:col-span-1 row-span-1 lg:row-span-1 image-container'>
            <img
              src={room.RoomImages[2].url}
              alt='Room 2'
              className='w-full h-full object-cover rounded'
            />
          </div>
          <div className='col-span-1 lg:col-span-1 row-span-1 lg:row-span-1 image-container'>
            <img
              src={room.RoomImages[3].url}
              alt='Room 3'
              className='w-full h-full object-cover rounded'
            />
          </div>
          <div className='col-span-1 lg:col-span-1 row-span-1 lg:row-span-1 image-container'>
            <img
              src={room.RoomImages[4].url}
              alt='Room 4'
              className='w-full h-full object-cover rounded'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainImage

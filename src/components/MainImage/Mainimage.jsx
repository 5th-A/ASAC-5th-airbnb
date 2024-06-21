'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function ButtonComponent({ buttonSrc, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className='button flex items-center space-x-1 rounded-xl hover:bg-customGray p-2'
    >
      <Image src={buttonSrc} alt={text + ' 아이콘'} width={16} height={16} />
      <span className='text-sm'>{text}</span>
    </button>
  )
}

function ButtonGroup({ isLike, setIsLike }) {
  const handleSaveClick = () => {
    setIsLike(!isLike)
  }

  return (
    <div className='flex space-x-2 button-container min-w-[152px] min-h-[28px]'>
      <ButtonComponent buttonSrc='/assets/share.svg' text={'공유하기'} onClick={() => {}} />
      <ButtonComponent
        buttonSrc={isLike ? '/assets/likeButton_full.svg' : '/assets/heart.svg'}
        text={'저장하기'}
        onClick={handleSaveClick}
      />
    </div>
  )
}

const MainImage = ({ id }) => {
  const [room, setRoom] = useState(null)
  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch('/roomDetail.json')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        const roomData = data[id]
        if (roomData) {
          setRoom(roomData)
          setIsLike(roomData.isLike)
        } else {
          console.error('Room not found')
        }
      } catch (error) {
        console.error('Failed to fetch room details:', error)
      }
    }

    fetchRoomDetails()
  }, [id])

  if (!room) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mx-auto pt-12'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>{room.roomName}</h1>
        <ButtonGroup isLike={isLike} setIsLike={setIsLike} />
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

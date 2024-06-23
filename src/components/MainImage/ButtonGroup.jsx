'use client'

import React, { useState } from 'react'
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

function ButtonGroup({ isLikeData }) {
  const [isLike, setIsLike] = useState(isLikeData)

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

export default ButtonGroup

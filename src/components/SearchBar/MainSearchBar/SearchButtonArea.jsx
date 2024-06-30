import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SearchButtonArea = ({ searchParams }) => {
  return (
    <div className='pt-1.5 px-2.5 justify-end'>
      <Image src='/assets/searchBar/searchButton.svg' width={50} height={50} alt='검색 버튼' />
    </div>
  )
}

export default SearchButtonArea

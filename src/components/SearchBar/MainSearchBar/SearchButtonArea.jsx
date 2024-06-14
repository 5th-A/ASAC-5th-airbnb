import Image from 'next/image'

import React from 'react'

const SearchButtonArea = () => (
  <div className='pt-1.5 px-2.5 justify-end'>
    <Image src='/assets/searchBar/searchButton.svg' width={50} height={50} alt='검색 버튼' />
  </div>
)

export default SearchButtonArea

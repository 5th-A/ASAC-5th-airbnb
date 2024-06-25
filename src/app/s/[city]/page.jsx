import React from 'react'
import SearchRoomList from '@/components/RoomList/SearchRoomList'
import Header from '@/components/Header/Header'
import Category from '@/components/Category/Category'

async function getData() {
  // http://example.com/api/search/${city}?checkin=${checkin}&checkout=${checkout}&adults=${adults}&teens=${teens}&kids=${kids}&pets=${pets}&page=${page},
  const res = await fetch('http://localhost:3000/SearchRoom.json')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const SearchResults = async ({ params, searchParams }) => {
  //   const city = decodeURIComponent(params.city) // 한글 디코딩 필요? %EC%A0%84%EC%A3%BC 이런식으로 나오는데 서버에 직접 요청해보고 디코딩할지말지 결정
  //   const { checkin, checkout, adults, teens, kids, pets, page } = searchParams
  const data = await getData() // 여기에 이제 위 값들을 넣어 요청하도록...
  return (
    <div>
      <Header />
      <Category />
      <SearchRoomList data={data} />
    </div>
  )
}

export default SearchResults

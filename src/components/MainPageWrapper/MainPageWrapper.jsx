'use client'

import Category from '@/components/Category/Category'
import RoomList from '@/components/RoomList/RoomList'
import { useState, useEffect } from 'react'

export default function MainPageWrapper() {
  const [roomDetail, setRoomDetail] = useState([])
  const [initRoom, setInitRoom] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)

  useEffect(() => {
    async function fetchRoomData() {
      try {
        const response = await fetch('/RoomList.json') // GET
        if (!response.ok) {
          throw new Error(`숙소 목록을 불러오지 못했습니다. : ${response.status}`)
        }
        const data = await response.json()
        setRoomDetail(data)
        setInitRoom(data.slice(0, 6))
      } catch (e) {
        setError(e.message)
      }
    }
    fetchRoomData()
  }, [])

  return (
    <>
      {selectedCategoryId && (
        <Category id={selectedCategoryId} setSelectedId={setSelectedCategoryId} />
      )}
      <RoomList roomDetail={roomDetail} initRoom={initRoom} />
    </>
  )
}

'use client'
import Header from '@/components/Header/Header'
import Category from '@/components/Category/Category'
import RoomList from '@/components/RoomList/RoomList'
import { useState, useEffect, useContext } from 'react'
import { useSelector } from 'react-redux'
import { FilterContext } from '@/components/Filter/FilterContext'

export default function MainPageWrapper() {
  const { filters } = useContext(FilterContext)
  const [roomDetail, setRoomDetail] = useState([])
  const [initRoom, setInitRoom] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const { adults, teens, kids, pets } = useSelector((state) => state.guestCount)
  const { selectedStartDate, selectedEndDate } = useSelector((state) => state.setCalendar)

  useEffect(() => {
    async function fetchRoomData() {
      try {
        const response = await fetch('/RoomList.json') //GET
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

  useEffect(() => {
    async function fetchRoomData() {
      try {
        setSearchQuery(
          `checkin=${selectedStartDate}&checkout=${selectedEndDate}&minPrice=${filters.priceRange.min}&maxPrice=${filters.priceRange.max}&bath=${filters.bedrooms.욕실}&bed=${filters.bedrooms.침대}&bedRoom=${filters.bedrooms.침실}&roomType=${filters.roomType}`,
        )
        const response = await fetch('/RoomList.json') //추후 완성된 searchQuery대입한 api로 변경
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
  }, [filters])
  return (
    <>
      <Header searchQuery={searchQuery} />
      <Category />
      <RoomList roomDetail={roomDetail} initRoom={initRoom} />
    </>
  )
}

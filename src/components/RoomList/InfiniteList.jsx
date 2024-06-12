'use client'

import { useEffect, useRef, useState } from 'react'
import roomDetail from '@/data/roomDetail.json'
import Link from 'next/link'
import RoomCard from './RoomCard'

export default function InfiniteList() {
  const [handleInfinite, setHandleInfinite] = useState(false)
  const [roomLists, setRoomLists] = useState([])
  const [page, setPage] = useState(2)
  const [loading, setLoading] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPage((prev) => prev + 1)
        }
      },
      {
        threshold: 0.01,
      },
    )
    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  }, [observerRef, handleInfinite])

  useEffect(() => {
    async function fetchRooms() {
      setLoading(true)
      console.log(page)
      const newRooms = roomDetail.slice((page - 1) * 5, page * 5)
      setRoomLists((prev) => [...prev, ...newRooms])
      setLoading(false)
    }
    if (handleInfinite) {
      fetchRooms()
    }
  }, [page, handleInfinite, loading])

  return (
    <div>
      {handleInfinite || (
        <div className='flex w-full justify-center items-center'>
          <button
            className='items-center justify-center text-white bg-black p-4 border-black border-solid rounded-xl'
            onClick={() => {
              setHandleInfinite(true)
            }}
          >
            숙소 더보기
          </button>
        </div>
      )}
      {handleInfinite && (
        <div>
          <div className='box-border justify-center grid grid-cols-2 w-9/10 gap-3 cardWidth:grid-cols-5'>
            {roomLists.map((room) => {
              return (
                <Link href={`/rooms/${room.id}`}>
                  <RoomCard
                    key={room.id}
                    imgSrc={room.RoomImages}
                    roomName={room.roomName}
                    roomAddress={room.address}
                    guestPrefer={room.guestPrefer}
                    price={room.price}
                  ></RoomCard>
                </Link>
              )
            })}
          </div>
          <div ref={observerRef} className='bg-red-500 mt-5'>
            {page}
          </div>
        </div>
      )}
    </div>
  )
}

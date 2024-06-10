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
  const spy = useRef()

  async function fetchData() {
    console.log('load!!')
    setLoading(true)
    try {
      const newData = roomDetail.slice((page - 1) * 2, page * 2 - 1)
      setRoomLists((prev) => [...prev, ...newData])
      setPage((prev) => prev + 1)
    } catch (e) {
      console.log('fetching error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (handleInfinite) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !loading) {
          fetchData()
          console.log('감지됨')
        }
      })
      if (spy.current) {
        observer.observe(spy.current)
      }

      return () => {
        if (spy.current) {
          observer.unobserve(spy.current)
        }
      }
    }
  }, [handleInfinite, loading])

  return (
    <div>
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
      {handleInfinite && (
        <div>
          <div className='box-border justify-center grid grid-cols-2 w-9/10 gap-3 auto-rows-fr cardWidth:grid-cols-2'>
            {roomLists.map((room) => {
              return (
                <Link href={`/rooms/${room.id}`} key={room.id}>
                  <RoomCard
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
          <div ref={spy} className='target bg-red-500'>
            여기 감지되면 추가로드
          </div>
        </div>
      )}
    </div>
  )
}

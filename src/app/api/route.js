import roomDetail from '@/data/roomDetail.json'
import { NextResponse } from 'next/server'

export async function GET(request, context) {
  const { page = 1, loadLimit = 10 } = request.query
  const startIndex = (page - 1) * loadLimit
  const endIndex = startIndex + loadLimit - 1
  const roomList = roomDetail.slice(startIndex, endIndex)

  return NextResponse.json({ roomList, total: roomDetail.length })
}

import { useState } from 'react'
import roomDetail from '../../roomDetail.json'

export default function DetailRoomInfo() {
  const roomDetailData = roomDetail
  const initRoomName = 'NEW 스테이구구(Stay GUGU) 302호'
  console.log(roomDetailData[0].roomName)
  return (
    <div className='flex itemWrapper justify-center mx-36 px-10'>
      {/* 왼쪽 정보 페이지 영역 (60%) */}
      {roomDetailData
        .filter((each) => each.roomName === initRoomName)
        .map((each) => {
          // 필요한 정보 뽑아서 문자열 하나에 join
          const filterInfo = Object.entries(each.filter)
            .filter(([key, value]) => value !== 0)
            .map(([key, value]) => {
              // 추후 요소 많아지면 사용할 최적화 방법 생각해보기
              switch (key) {
                case 'maximum':
                  return `최대 인원 ${value}명`
                case 'beds':
                  return `침대 ${value}개`
                case 'bedRooms':
                  return `침실 ${value}개`
                case 'bathRooms':
                  return `화장실 ${value}개`
                case 'floor':
                  return `${value}층`
              }
            })
            .join(' · ')

          return (
            <div key={each.roomName} className='w-7/12 box-border'>
              <div>
                <div className='py-2'>
                  <h2 className='text-xl font-semibold'>
                    {each.address}, {each.roomType}
                  </h2>
                  <div>{filterInfo}</div>
                </div>
                <div>게스트선호표시</div>
                <div>카테고리나 슈퍼호스트 여부 아이콘들 표시</div>
                {/* 구분선 */}
                <div>호스트 프로필</div>
                <div>숙소 상세정보</div>
                <div>숙박 장소</div>
                {/* 구분선 */}
              </div>
            </div>
          )
        })}

      {/* 오른쪽 계산기 영역 (40%) */}
      <div className='w-3/12'>
        <div>이쪽에는 결제 계산기</div>
      </div>
    </div>
  )
}

import { useState } from 'react'

import roomDetail from '../../roomDetail.json'

export default function DetailRoomInfo() {
  const roomDetailData = roomDetail
  const roomName = 'NEW 스테이구구(Stay GUGU) 302호'
  return (
    <div className='flex justify-center'>
      {/*왼쪽 정보페이지 영역*/}
      <div>
        <div className=''>
          <div>숙소주소와 타입</div>
          <div>참대등의 정보</div>
        </div>
        <div>게스트선호표시</div>
        <div>카테고리나 슈퍼호스트 여부 아이콘들 표시</div>
        {/*구분선 */}
        <div>호스트 프로필</div>
        <div>숙소 상세정보</div>
        <div>숙박 장소</div>
        {/*구분선 */}
      </div>
      {/*오른쪽 계산기 영역*/}
      <div>이쪽에는 결제 계산기</div>
    </div>
  )
}

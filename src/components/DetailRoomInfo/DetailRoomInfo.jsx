import { useState } from 'react'
import guestPrefer_Left from '../../assets/guestPrefer_Left.svg'
import guestPrefer_Right from '../../assets/guestPrefer_Right.svg'
import roomDetail from '../../roomDetail.json'

export default function DetailRoomInfo() {
  const roomDetailData = roomDetail
  const initRoomName = 'NEW 스테이구구(Stay GUGU) 302호'
  console.log(roomDetailData[0].roomName)
  return (
    <div className='flex w-[100%] justify-center items-center'>
      <div className='flex itemWrapper justify-center w-[70%] px-10'>
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

            const filterCategory = Object.entries(each.categories).map(([key, value]) => {
              return (
                <div key={value.id}>
                  <div>
                    <img src={value.icon} width='20' height='20'></img>
                    <div>{value.name}</div>
                  </div>
                </div>
              )
            })
            return (
              <div key={each.roomName} className='flex-6 box-border'>
                <div>
                  <div className='py-2'>
                    <h2 className='text-xl font-semibold'>
                      {each.address}, {each.roomType}
                    </h2>
                    <div>{filterInfo}</div>
                  </div>
                  {each.guestPrefer && (
                    <div className='flex py-5 px-7 border border-solid rounded-xl border-gray-300'>
                      <div className='flex justify-center space-x-4'>
                        <div
                          className='flex justify-center'
                          style={{ minWidth: '94px', maxHeight: '36px' }}
                        >
                          <img src={guestPrefer_Left} width='23' height='36' />
                          <div className='font-semibold text-center' style={{ minWidth: '48px' }}>
                            게스트 <br /> 선호
                          </div>
                          <img src={guestPrefer_Right} width='23' height='36' />
                        </div>
                        <div
                          className='overflow-hidden whitespace-normal'
                          style={{ maxHeight: '48px' }}
                        >
                          에어비앤비 게스트에게 가장 사랑받는 숙소
                        </div>
                      </div>
                      <div
                        className='justify-center text-center px-4 border-r border-gray-300 border-solid'
                        style={{ minWidth: '81px' }}
                      >
                        <div>별점</div>
                        <div>별개수</div>
                      </div>
                      <div className='mx-2'></div>
                      <div className='justify-center text-center' style={{ minWidth: '52px' }}>
                        <div>426개</div>
                        <div>후기</div>
                      </div>
                    </div>
                  )}
                  <div className='pt-5 pb-8'>{filterCategory}</div>
                  {/* 구분선 */}
                  <div className='py-6 border-t border-b border-gray-300 border-solid'>
                    호스트 프로필
                  </div>
                  {/* 구분선 */}
                  <div className='pt-8 pb-12 border-b border-gray-300 border-solid'>
                    숙소 상세정보
                  </div>
                  <div className='pt-12 pb-12 border-b border-gray-300 border-solid'>숙박 장소</div>
                </div>
              </div>
            )
          })}

        {/* 오른쪽 계산기 영역 (40%) */}
        <div className='flex-4'>
          <div>
            <div className='sticky'>이쪽에는 결제 계산기</div>
          </div>
        </div>
      </div>
    </div>
  )
}

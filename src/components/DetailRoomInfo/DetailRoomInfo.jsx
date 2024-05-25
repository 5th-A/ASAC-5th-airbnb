import { useState } from 'react'
import guestPrefer_Left from '../../assets/guestPrefer_Left.svg'
import guestPrefer_Right from '../../assets/guestPrefer_Right.svg'
import roomDetail from '../../roomDetail.json'

export default function DetailRoomInfo(/*나중에 어떤방인지 식별할거 props로 받아오기*/) {
  const roomDetailData = roomDetail
  const initRoomName = 'NEW 스테이구구(Stay GUGU) 302호'
  const currentYear = new Date().getFullYear()

  return (
    <div className='flex w-[100%] justify-center items-center'>
      <div className='flex itemWrapper justify-center w-[70%] px-10'>
        {/* 왼쪽 정보 페이지 영역 (60%) */}
        {roomDetailData
          .filter((each) => each.roomName === initRoomName)
          .map((each) => {
            /* 필터된 정보 문자열 하나로 */
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
            /* 카테고리 목록 모아둔 배열 */
            const filterCategory = Object.entries(each.categories).map(([key, value]) => {
              return (
                <div key={value.id}>
                  <div className='flex gap-1'>
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
                          <div
                            className='font-semibold text-center px-1 pb-1'
                            style={{ minWidth: '56px' }}
                          >
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
                      {/* 별점, 후기는 json 어떻게할지 정하고 구현 */}
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
                  <div className='flex justify-between pt-5 pb-8'>
                    <div className='flex-grow'>
                      <div className='width-[100%] grid grid-cols-2 grid-rows-3 gap-3 auto-rows-fr'>
                        {filterCategory}
                      </div>
                    </div>
                  </div>

                  <div
                    key={each.host.id}
                    className='flex items-center py-6 border-t border-b border-gray-300 border-solid gap-x-6'
                  >
                    <div className='overflow-hidden w-10 h-10' style={{ borderRadius: '70%' }}>
                      <img className='object-cover' src={each.host.profile} />
                    </div>
                    <div className='flex flex-col gap-y-1 '>
                      <div className='font-semibold'>호스트: {each.host.name} 님</div>
                      <div>
                        <ol>
                          {each.host.type === '슈퍼호스트' ? (
                            <>
                              <li className='float-left text-gray-500 text-sm'>{each.host.type}</li>
                              <li className='float-left px-1 text-gray-500 text-sm'>{'·'}</li>
                              <li className='float-left text-gray-500 text-sm'>
                                호스팅 경력 {currentYear - each.host.year}년
                              </li>
                            </>
                          ) : (
                            <li className='text-sm'>
                              호스팅 경력 {currentYear - each.host.year}년
                            </li>
                          )}
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div className='pt-8 pb-12 border-b whitespace-pre-line border-gray-300 border-solid'>
                    {each.introduction}
                  </div>
                  <div className='pt-12 pb-12 border-b border-gray-300 border-solid'>
                    <div>
                      <div>해당하는 아이콘 자리</div>
                      <div>침실</div>
                      <div>침대종류</div>
                    </div>
                  </div>
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

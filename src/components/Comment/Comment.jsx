import CommentJson from './comment.json'
import star from '../../assets/star.svg'
const data = CommentJson

dateCalculate(data[0].comment[0].date)

function dateCalculate(dateString) {
  const nowdate = new Date()
  const [year, month, day] = dateString.split('-')
  const givenDate = new Date(year, month - 1, day) // 월은 0부터 시작하기 때문에 -1 필요
  const timeDiff = nowdate - givenDate // 밀리초 단위 차이
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) // 일 단위 차이
  const weekDiff = Math.ceil(dayDiff / 7) // 주 단위 차이

  if (dayDiff < 1) {
    return '오늘'
  } else if (dayDiff < 7) {
    return `${dayDiff}일 전`
  } else if (weekDiff < 4) {
    return `${weekDiff}주 전`
  } else {
    return `${year}년 ${month}월`
  }
}

//게스트 선호일 때 컴포넌트
const GuestPrefer = () => {
  return (
    <div className='fr1 w-full max-w-[960px] h-[214px]  mt-4 mb-16 flex flex-col justify-center items-center'>
      <div className='fr1-1 flex  w-[380px] h-[132px]'>
        <div className='leftwing w-auto '>
          <img
            src='https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png'
            className='w-[87px] h-[132px]'
          />
        </div>
        <div className='Average w-[194.6px] h-[100px] flex justify-center items-center text-8xl font-bold'>
          {data[0].average}
        </div>
        <div className='wingR w-auto'>
          <img
            src='https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png'
            className='w-[86.7px] h-[132px]'
          />
        </div>
      </div>

      <div className='fr1-2 w-[150px] h-[26px] pb-3 flex justify-center items-center text-2xl font-bold'>
        게스트 선호
      </div>

      <div className='fr1-3 w-[380px] h-[48px] flex flex-col justify-center items-center'>
        <span className=' text-base text-center text-gray-500'>평점, 후기, 신뢰도 기준</span>
        <span className=' text-base text-center text-gray-500'>
          에어비앤비에서 가장 사랑받는 숙소
        </span>
      </div>
    </div>
  )
}
//후기 3개이상 있을때 컴포넌트

//후기 3개 미만일때 컴포넌트

//후기 없을 때
const NoReview = () => {
  return (
    <div className='fr1 w-full max-w-[960px] h-[150px]'>
      <div className='flex justify-first items-center text-[22px] font-semibold py-12'>
        후기 (아직) 없음
      </div>
    </div>
  )
}

const Comment = () => {
  return (
    <div className='all p-12 bg-white flex justify-center items-center flex-col'>
      {/*그 밑에 전체 평점, 청결도, 정확도 etc.. */}
      <GuestPrefer />

      {/*<NoReview />*/}
      <div className='flex justify-center items-center'>
        <div className='fr3 w-full max-w-[960px] h-[566px] -mx-2 flex flex-wrap justify-start '>
          {data[0].comment.map((each, index) => {
            return (
              <div key={index} className=''>
                <div className=' px-2 w-[400px] h-[190px]  mr-[64px]'>
                  <div className='fr3-1 flex gap-3 mb-2'>
                    <div className=''>
                      <img className='w-[48px] h-[48px] rounded-3xl' src={each.profile} />
                    </div>
                    <div className='flex-col content-center'>
                      <div className='h-[20px] font-semibold'>{each.name}</div>
                      <div className='h-[18px]'>{each.location}</div>
                    </div>
                  </div>

                  <div className='fr3-2 flex mb-2 w-[400px] h-[18px]'>
                    <div className='flex gap-0.5 justify-center items-center'>
                      <img className='w-[9px] h-[9px]' src={star} />
                      <img className='w-[9px] h-[9px]' src={star} />
                      <img className='w-[9px] h-[9px]' src={star} />
                      <img className='w-[9px] h-[9px]' src={star} />
                      <img className='w-[9px] h-[9px]' src={star} />
                    </div>
                    <div className='px-[5px]'>
                      <span>·</span>
                    </div>
                    <div>{dateCalculate(each.date)}</div>
                  </div>

                  <div className='fr3-3 '>
                    <span className=''>{each.msg}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/*후기 모두보기 버튼 */}
      <div className='fr4 w-full max-w-[960px] h-[50px] mt-10'>
        <div className='fr4-1 w-[200px] h-[50px] flex justify-center items-center'>
          <button className='reviewmore text-[16px] flex justify-start items-center border-[0.8px] border-solid border-black rounded-lg px-[23px] py-[13px] font-semibold'>
            후기 {data[0].comment.length}개 모두 보기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Comment

'use client'
import Image from 'next/image'
import CommentJson from '@/data/comment.json'
import star from '/public/assets/star.svg'
import { FaRegStar } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa'
import { useRef, useState } from 'react'

const data = CommentJson

// function Star() {
//   const ARRAY = [0, 1, 2, 3, 4]

//   const [rate, setRate] = useState(0)
//   const commentRef = useRef()

//   const handleStarClick = (index) => {
//     setRate(index + 1)
//   }

//   const handleSubmit = () => {
//     const comment = commentRef.current.value
//     // api 요청 할 부분
//     console.log('Rate:', rate)
//     console.log('Comment:', comment)
//   }

//   return (
//     <>
//       <div className='flex'>
//         {ARRAY.map((_, index) => (
//           <div
//             key={index}
//             id={`star-${index}`}
//             onClick={() => handleStarClick(index)}
//             style={{ cursor: 'pointer', display: 'inline-block' }} // 클릭 가능한 커서 스타일 추가
//           >
//             {index < rate ? <FaStar size='40' color='gold' /> : <FaRegStar size='40' />}
//           </div>
//         ))}
//       </div>
//       <div className=''>
//         <div className='fr3-1 flex gap-3 mb-2'>
//           <div className=''>
//             <img
//               className='w-[48px] h-[48px] rounded-3xl'
//               src={data[0].comment[0].profile}
//               alt='Profile'
//             />
//           </div>
//           <div className='flex-col content-center'>
//             <div className='h-[20px] font-semibold'>admin</div>
//             <div className='h-[18px]'>admin</div>
//           </div>
//         </div>
//       </div>
//       <input className='border' type='text' ref={commentRef} />
//       <button onClick={handleSubmit} className='btn'>
//         버튼
//       </button>
//     </>
//   )
// }

// function CommentInput() {
//   const [comment, setComment] = useState('')

//   const handleInputChange = (event) => {
//     setComment(event.target.value)
//   }

//   return (
//     <>
//       <div className=''>
//         <div className='fr3-1 flex gap-3 mb-2'>
//           <div className=''>
//             <img
//               className='w-[48px] h-[48px] rounded-3xl'
//               src={data[0].comment[0].profile}
//               alt='Profile'
//             />
//           </div>
//           <div className='flex-col content-center'>
//             <div className='h-[20px] font-semibold'>admin</div>
//             <div className='h-[18px]'>admin</div>
//           </div>
//         </div>
//       </div>
//       <input className='border' type='text' value={comment} />
//       <button onClick={() => {}}> 버튼 </button>
//     </>
//   )
// }

// dateCalculate(data[0].comment[0].date)
const StarRating = ({ rate, setRate }) => {
  const ARRAY = [0, 1, 2, 3, 4]

  const handleStarClick = (index) => {
    setRate(index + 1)
  }

  return (
    <div className='flex'>
      {ARRAY.map((_, index) => (
        <div
          key={index}
          id={`star-${index}`}
          onClick={() => handleStarClick(index)}
          style={{ cursor: 'pointer', display: 'inline-block' }} // 클릭 가능한 커서 스타일 추가
        >
          {index < rate ? <FaStar size='40' color='gold' /> : <FaRegStar size='40' />}
        </div>
      ))}
    </div>
  )
}

const CommentInput = ({ commentRef, comment, setComment }) => {
  const handleInputChange = () => {
    setComment(commentRef.current.value)
  }

  return (
    <div className=''>
      <div className='fr3-1 flex gap-3 mb-2'>
        <div className=''>
          <img
            className='w-[48px] h-[48px] rounded-3xl'
            src={data[0].comment[0].profile}
            alt='Profile'
          />
        </div>
        <div className='flex-col content-center'>
          <div className='h-[20px] font-semibold'>admin</div>
          <div className='h-[18px]'>admin</div>
        </div>
      </div>
      <input
        className='border'
        type='text'
        ref={commentRef}
        value={comment}
        onChange={handleInputChange}
      />
    </div>
  )
}

const StarAndComment = () => {
  const [rate, setRate] = useState(0)
  const [comment, setComment] = useState('')
  const commentRef = useRef()

  const handleSubmit = () => {
    const commentValue = commentRef.current.value
    // api 요청 할 부분
    console.log('Rate:', rate)
    console.log('Comment:', commentValue)
    setComment('')
  }

  return (
    <>
      <StarRating rate={rate} setRate={setRate} />
      <CommentInput commentRef={commentRef} comment={comment} setComment={setComment} />
      <button onClick={handleSubmit} className='btn'>
        버튼
      </button>
    </>
  )
}

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
  console.log('리랜더')
  return (
    <div className='all p-12 bg-white flex justify-center items-center flex-col'>
      {/*그 밑에 전체 평점, 청결도, 정확도 etc.. */}
      <GuestPrefer />

      {/*<NoReview />*/}
      <div className='flex justify-center items-center'>
        <div className='fr3 w-full  -mx-2 flex flex-wrap justify-center  grid grid-cols-2  '>
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
                      <img className='w-[9px] h-[9px]' src={star.src} />
                      <img className='w-[9px] h-[9px]' src={star.src} />
                      <img className='w-[9px] h-[9px]' src={star.src} />
                      <img className='w-[9px] h-[9px]' src={star.src} />
                      <img className='w-[9px] h-[9px]' src={star.src} />
                      {/* <Image src={star} width={9} /> */}
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
      <div>
        <StarAndComment />
      </div>
    </div>
  )
}

export default Comment

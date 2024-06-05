'use client'
import Image from 'next/image'
import CommentJson from '@/data/comment.json'
import star from '/public/assets/star.svg'
import { FaRegStar } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa'
import { useRef, useState } from 'react'
import Modal from '@/components/Modal/Modal'
const data = CommentJson

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
          {index < rate ? <FaStar size='30' color='black' /> : <FaRegStar size='30' />}
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
          <div className='h-[20px] font-semibold'>{data[0].comment[0].name}</div>
          {/* 위는 어드민이 아니고 json에서 프로필 사진 가져왔던거 처럼 comment[0] 이름 가져와서 뿌려주기  */}
        </div>
      </div>
      <input
        className='border w-[500px] h-[130px]'
        placeholder='후기를 작성해주세요.'
        type='text'
        ref={commentRef}
        value={comment}
        onChange={handleInputChange}
      />
    </div>
  )
}

const StarAndComment = ({ setIsopen }) => {
  const [rate, setRate] = useState(0)
  const [comment, setComment] = useState('')
  //  json 에 코멘트의 1번회원 프로필사진, 이름 상태 추가  해야함
  const commentRef = useRef()

  const handleSubmit = () => {
    const commentValue = commentRef.current.value
    // api 요청 할 부분
    console.log('Rate:', rate)
    console.log('Comment:', commentValue)
    // console.log(CommentInput 컴포넌트에 있는 프로필사진 props 혹은 context 이용해서 이 부분에 띄워주기)
    // console.log(이름도 위 콘솔로그 처럼 가져와서 여기에 띄워주기)
    // 유저 ID, 지역, 날짜
    setComment('')
    setIsopen(false)
  }

  return (
    <>
      <StarRating rate={rate} setRate={setRate} />
      <CommentInput commentRef={commentRef} comment={comment} setComment={setComment} />
      <button onClick={handleSubmit} className='btn'>
        제출
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

const Comment = ({ id }) => {
  const [isOpen, setIsopen] = useState(false)
  const dataSeg = data.find((each) => each.id == id)
  const [show, setShow] = useState(false)

  const handleButtonChange = () => {
    setIsopen(true)
  }

  const showModal = () => {
    setShow(true)
  }

  const closeModal = () => {
    event.preventDefault()
    setShow(false)
  }

  return (
    <div className='all p-12 bg-white flex justify-center items-center flex-col box-border'>
      {/*그 밑에 전체 평점, 청결도, 정확도 etc.. */}
      <GuestPrefer />

      {/*<NoReview />*/}
      <div className='flex justify-center items-center'>
        <div className='fr3 w-full  -mx-2 flex flex-wrap justify-center  grid grid-cols-2  '>
          {/* 최대 6개만 출력하게 하기 JSON 파일에  댓글이 없어서 빈값이 있을 수도 있어서 */}
          {(dataSeg?.comment || []).slice(0, 6).map((each, index) => {
            return (
              <div key={index} className=''>
                <div className=' px-2 w-[400px] h-[190px]  mr-[64px]'>
                  <div className='fr3-1 flex gap-3 mb-2'>
                    <div className='relative w-[48px] h-[48px]'>
                      <Image
                        className='rounded-3xl'
                        alt='프로필사진'
                        layout='fill'
                        objectFit='cover'
                        src={each.profile}
                      />
                    </div>
                    <div className='flex-col content-center'>
                      <div className='h-[20px] font-semibold'>{each.name}</div>
                      <div className='h-[18px]'>{each.location}</div>
                    </div>
                  </div>

                  <div className='fr3-2 flex mb-2 w-[400px] h-[18px]'>
                    <div className='flex gap-0.5 justify-center items-center'>
                      {Array.from({ length: Number(each.rate) }, (_, i) => (
                        <FaStar key={i} size='13' color='black' />
                      ))}
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
      <div className=' fr4 w-full max-w-[960px] h-[50px] mt-10 mb-10'>
        <div className='fr4-1 w-[200px] h-[50px] flex justify-center items-center border-[0.8px] border-solid border-black rounded-lg mb-4'>
          <button
            onClick={showModal}
            className='text-[16px] flex justify-start items-center  px-[23px] py-[13px] font-semibold'
          >
            후기 {dataSeg?.comment?.length || 0}개 모두 보기
          </button>

          {show && <Modal id={id} show={show} onClose={closeModal} />}
        </div>
        <div className='fr4-1 w-[200px] h-[50px] flex justify-center items-center border-[0.8px] border-solid border-black rounded-lg'>
          <button
            onClick={handleButtonChange}
            className=' text-[16px] flex justify-start items-center  px-[23px] py-[13px] font-semibold'
          >
            댓글달기
          </button>
        </div>
      </div>
      <div>{isOpen && <StarAndComment setIsopen={setIsopen} />}</div>
    </div>
  )
}

export default Comment

// calendarSlice로부터 요소들 import
import { setSelectedStartDate, setSelectedEndDate, resetDates } from '@/redux/slices/calendarSlice'
import CalendarContainer from './CalendarContainer'
import { useDispatch, useSelector } from 'react-redux'

// * CalenderContainer를 이용한 예시 코드
const Calendar = () => {
  //redux에서 설정된 메서드(action)들 실행을 위해 dispatch 선언
  const dispatch = useDispatch()
  //redux store에 정의된 요소들 selector 이용해 가져옴
  //정의된 action들은 /redux/slices/calendarSlice에서 reducers에 정의된 것들
  const { selectedStartDate, selectedEndDate, selectedDatesText } = useSelector(
    (state) => state.setCalendar, //slice의 name을 setCalendar로 설정했기 때문에 이렇게 불러와야함
  )

  return (
    <div className='p-4'>
      {/* 사용법 모르겠으면 visibleCalendars에서 달력 표시 개수만 직접 설정하고 복붙해도 작동할 듯 합니다. 사용될 컴포넌트에서 반드시 dispatch 선언과 selectedStartDate*/}
      <CalendarContainer
        visibleCalendars={2} // 달력 표시 개수
        selectedStartDate={selectedStartDate} //체크인 날자에 해당, selectedStartDate를 parameter로 사용하면 체크인 날자 불러올 수 있음
        setSelectedStartDate={(date) => dispatch(setSelectedStartDate(date))}
        selectedEndDate={selectedEndDate} // 체크아웃 날자에 해당
        setSelectedEndDate={(date) => dispatch(setSelectedEndDate(date))}
      />
      {/* 날짜 초기화 버튼 양식 */}
      <button
        className='text-[14px] underline font-semibold'
        onClick={() => {
          dispatch(resetDates()) //resetDates가 날짜 리셋 action
        }}
      >
        날짜 지우기
      </button>
    </div>
  )
}

export default Calendar

import './App.css'

import Container from './components/Container/Container.jsx'
import RoomList from './components/RoomList/RoomList.jsx'
import SearchBar from './components/SearchBar/SearchBar'
import Footer from './components/Footer/Footer.jsx'
import SmallSearchBar from './components/SearchBar/SmallSearchBar.jsx'
import Category from './components/Category/Category.jsx'
import DetailPageCalendarDisplay from './components/Calendar/DetailPageCalendarDisplay.jsx'
import Calendar from './components/Calendar/Calendar.jsx'

function App() {
  return (
    <>
      {/* <Container />
      <SearchBar />
      <Category />
      <RoomList></RoomList>
      <SearchBar />
      <SmallSearchBar /> */}
      <Calendar />
      <DetailPageCalendarDisplay />
      <Footer />
    </>
  )
}

export default App

import './App.css'

import RoomList from './components/RoomList/RoomList.jsx'
import SearchBar from './components/SearchBar/SearchBar'
import Footer from './components/Footer/Footer.jsx'
function App() {
  return (
    <>
      <SearchBar />
      <RoomList></RoomList>
      <Footer />
    </>
  )
}

export default App

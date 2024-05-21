import './App.css'

import RoomList from './components/RoomList/RoomList.jsx'
import SearchBar from './components/SearchBar/SearchBar'
import Footer from './components/Footer/Footer.jsx'
import Category from './components/Category/Category.jsx'
function App() {
  return (
    <>
      <SearchBar />
      <Category />
      <RoomList></RoomList>
      <Footer />
    </>
  )
}

export default App

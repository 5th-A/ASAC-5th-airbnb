import './App.css'

import Container from './components/Container/Container.jsx'
import RoomList from './components/RoomList/RoomList.jsx'
import SearchBar from './components/SearchBar/SearchBar'
import Footer from './components/Footer/Footer.jsx'
function App() {
  return (
    <>
      <Container />
      <SearchBar />
      <RoomList></RoomList>
      <Footer />
    </>
  )
}

export default App

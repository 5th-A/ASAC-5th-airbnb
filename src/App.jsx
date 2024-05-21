import './App.css'

import Container from './components/Container/Container.jsx'
import RoomList from './components/RoomList/RoomList.jsx'
import SearchBar from './components/SearchBar/SearchBar'
import Footer from './components/Footer/Footer.jsx'
import SmallSearchBar from './components/SearchBar/SmallSearchBar.jsx'
function App() {
  return (
    <>
      <Container />
      <RoomList></RoomList>
      <SearchBar />
      <SmallSearchBar/>
      <Footer />
    </>
  )
}

export default App
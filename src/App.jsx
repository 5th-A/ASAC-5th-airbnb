import './App.css'

import Container from './components/Container/Container.jsx'
import RoomList from './components/RoomList/RoomList.jsx'
import SearchBar from './components/SearchBar/SearchBar'
import Footer from './components/Footer/Footer.jsx'
import SmallSearchBar from './components/SearchBar/SmallSearchBar.jsx'
import Category from './components/Category/Category.jsx'

function App() {
  return (
    <>
      <Container />
      <SearchBar />
      <Category />
      <RoomList></RoomList>
      <SearchBar />
      <SmallSearchBar />
      <Footer />
    </>
  )
}

export default App



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollTop from './components/scroll-top/scroll-top'
import Home from './components/home/home'
import Nav from './components/nav/nav'
import Search from './components/search/search'
import Movies from './components/movies/movies'
import Shows from './components/shows/shows'
import Footer from './components/footer/footer'
import React from 'react'
import Details from './components/details/details'
import SearchResults from './components/search/search-results/search-results'
import Favorites from './components/favorites/favorites'

function App() {
  const [showSearch, setShowSearch] = React.useState(false as boolean)



  return (
    <div>
      <BrowserRouter>
        <ScrollTop />
        <Nav setShowSearch={setShowSearch} />
        <Search showSearch={showSearch} setShowSearch={setShowSearch} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/details/:showType/:id' element={<Details />} />
          <Route path='/search/:query' element={<SearchResults />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

// TODO: Implement open watch now from carousel and movie component since it currently only works from details component
// TODO: fix bug when loading detais from movis and then tv. Could log the path that the app is using since it might be wrong for some reason 
// TODO: Implement show sorting and pagination on the Movies and Shows components



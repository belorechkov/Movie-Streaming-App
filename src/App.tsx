

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

// TODO: Implement Movies page
// TODO: Implement TV Shows page
// TODO: Implement Details page with dynamic data
// TODO: Implement Search component
// TODO: Implement streaming APi
// TODO: Embed movies API


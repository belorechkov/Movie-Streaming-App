

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollTop from './components/scroll-top/scroll-top'
import Home from './components/home/home'
import Nav from './components/nav/nav'
import Search from './components/search/search'
import Movies from './components/movies/movies'
import Shows from './components/shows/shows'
import Footer from './components/footer/footer'
import { useState } from 'react'

function App() {
  const [showSearch, setShowSearch] = useState(false)
  

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App


//   <div>
//   <ScrollTop/>
//   {/* <Nav/> */}
//   <Routes>
//   <Route path='/' element={<Home/>}/>
//   <Route path='/movies' element={ <Movies/>}/>
//   <Route path='/shows' element={ <Shows/>}/>
//   {/* <Search/> */}
//   <Footer/>
//   </Routes>
// </div>
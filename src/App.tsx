

import Footer from './components/footer/footer'
import Home from './components/home/home'
import Nav from './components/nav/nav'
// import Movies from './components/movies/movies'
// import Search from './components/search/search'
import ScrollTop from './components/scroll-top/scroll-top'

function App() {
  return (
    <div>
      <ScrollTop/>
      <Nav/>
      <Home/>
      {/* <Movies/> */}
      {/* <Search/> */}
      <Footer/>
    </div>
  )
}

export default App

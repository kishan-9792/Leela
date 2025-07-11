import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import OurYards from './pages/OurYards'
import OurCommltment from './pages/OurCommltment';
import CSRActivlty from './pages/CSRActvlty'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About/>}/>
      </Routes>
      <OurYards/>
      <OurCommltment/>\
      <CSRActivlty/>
      <Contact/>
    </div>
  )
}

export default App

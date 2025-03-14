import './mediaqueries.css'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Donate from './pages/Donate'
import Contact from './pages/Contact'


function App() {
  const location= useLocation()

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Donate />
      <Contact />
      
    </>
  )
}

export default App

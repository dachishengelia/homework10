import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Hobbies from './pages/Hobbies'
import HobbyDetail from './pages/HobbyDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/hobbies/:hobbyId" element={<HobbyDetail />} />
    </Routes>
  )
}

export default App;

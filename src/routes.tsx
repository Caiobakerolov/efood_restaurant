import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Meals from './pages/Meals'

const Rout = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/meals" element={<Meals />} />
  </Routes>
)

export default Rout

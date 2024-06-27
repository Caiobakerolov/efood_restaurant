import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Meals from './pages/Meals'
import DetailsProduct from './pages/DetailsProduct'

const Rout = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/meals" element={<Meals />} />
    <Route path="/detailsProduct/:id" element={<DetailsProduct />} />
  </Routes>
)

export default Rout

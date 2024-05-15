import { Link } from 'react-router-dom'
import { HeaderMeal } from './styles'
import logo from '../../assets/images/logo.svg'

const HeaderMeals = () => (
  <>
    <HeaderMeal>
      <h2>Restaurant</h2>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <p> 0 - Product in cart</p>
    </HeaderMeal>
  </>
)

export default HeaderMeals

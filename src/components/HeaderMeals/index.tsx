import { Link } from 'react-router-dom'
import { Container, BackgroundImage, HeaderMeal } from './styles'
import logo from '../../assets/images/logo.svg'

const HeaderMeals = () => (
  <>
    <HeaderMeal>
      <Container>
        <h2>Restaurant</h2>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <p> 0 - Product in cart</p>
      </Container>
      <BackgroundImage>
        <div className="image-wrapper" />
        <div className="description">
          <p>Italiana</p>
          <h2>La Dolce Vita Trattoria</h2>
        </div>
      </BackgroundImage>
    </HeaderMeal>
  </>
)

export default HeaderMeals

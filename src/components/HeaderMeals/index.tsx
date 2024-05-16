import { Link } from 'react-router-dom'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Container, BackgroundImage, HeaderMeal, StyledIcon } from './styles'
import logo from '../../assets/images/logo.svg'

const HeaderMeals = () => (
  <>
    <HeaderMeal>
      <Container>
        <h2>Restaurant</h2>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <p>
          0 - Product in cart
          <StyledIcon icon={faShoppingCart} />
        </p>
      </Container>
      <BackgroundImage>
        <div className="image-wrapper" />
        <div className="description">
          <p>Italiana</p>
          <h3>La Dolce Vita Trattoria</h3>
        </div>
      </BackgroundImage>
    </HeaderMeal>
  </>
)

export default HeaderMeals

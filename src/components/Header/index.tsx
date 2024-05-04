import { HeaderBar } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <>
    <HeaderBar>
      <img src={logo} alt="Efood" />
      <h1>Live gastronomic experiences in the comfort of your home</h1>
    </HeaderBar>
  </>
)

export default Header

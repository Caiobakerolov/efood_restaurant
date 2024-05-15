import { FaInstagram, FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa'
import { Container, Icons, Description } from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <>
    <Container>
      <div>
        <Link to="/">
          <img src={logo} alt="Efood" />
        </Link>
        <Icons>
          <Link to="https://www.instagram.com">
            <FaInstagram />
          </Link>
          <Link to="https://www.facebook.com">
            <FaFacebook />
          </Link>
          <Link to="https://www.twitter.com">
            <FaTwitter />
          </Link>
        </Icons>
        <Description>
          Efood is a platform for promoting establishments, the responsibility
          for delivery and quality of products
        </Description>
      </div>
      <p>
        {currentYear} - &copy; all rights reserved to <span>Mr. Baker</span>{' '}
        <Link to="#">
          {' '}
          <FaHeart />
        </Link>
      </p>
    </Container>
  </>
)

export default Footer

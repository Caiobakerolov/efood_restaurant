import { BrowserRouter } from 'react-router-dom'
import { GlobalCss, Container } from './styles'
import Header from './components/Header'
import Rout from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <Rout />
      <Footer />
    </BrowserRouter>
  )
}

export default App

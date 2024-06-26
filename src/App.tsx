import { BrowserRouter } from 'react-router-dom'
import { GlobalCss, Container } from './styles'
import Rout from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Rout />
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import { GlobalCss, Container } from './styles'
import Header from './components/Header'
import Rout from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <Rout />
    </BrowserRouter>
  )
}

export default App

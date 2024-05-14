import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss, Container } from './styles'
import Home from './pages/Home'
import Meals from './pages/Meals'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    )
  },
  {
    path: '/meals',
    element: (
      <>
        <Meals />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
      <RouterProvider router={routes} />
    </>
  )
}

export default App

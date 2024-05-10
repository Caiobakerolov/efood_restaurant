import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss, Container } from './styles'
import ProductsList from './components/ProductsList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ProductsList />
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

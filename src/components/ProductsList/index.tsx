import Product from '../Product'
import { Container, List } from './styles'

const ProductsList = () => (
  <>
    <Container>
      <div className="container">
        <List>
          <Product
            image="//placehold.it/470x215"
            infos={['highlight of the week', 'Japanese']}
            title="Hioki Sushi"
            description="test"
          />
          <Product
            image="//placehold.it/470x215"
            infos={['Italiana']}
            title="Hioki Sushi"
            description="test"
          />
          <Product
            image="//placehold.it/470x215"
            infos={['Italiana']}
            title="Hioki Sushi"
            description="test"
          />
          <Product
            image="//placehold.it/470x215"
            infos={['Italiana']}
            title="Hioki Sushi"
            description="test"
          />
          <Product
            image="//placehold.it/470x215"
            infos={['Italiana']}
            title="Hioki Sushi"
            description="test"
          />
          <Product
            image="//placehold.it/470x215"
            infos={['Italiana']}
            title="Hioki Sushi"
            description="test"
          />
        </List>
      </div>
    </Container>
  </>
)

export default ProductsList

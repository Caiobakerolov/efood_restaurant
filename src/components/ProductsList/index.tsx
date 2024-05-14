import Product from '../Product'
import Dish from '../../models/Dish'
import { Container, List } from './styles'

export type Props = {
  dishes: Dish[]
}

const ProductsList = ({ dishes }: Props) => (
  <>
    <Container>
      <div>
        <List>
          {dishes.map((dish) => (
            <Product
              key={dish.id}
              image={dish.image}
              infos={dish.infos}
              title={dish.title}
              description={dish.description}
            />
          ))}
        </List>
      </div>
    </Container>
  </>
)

export default ProductsList

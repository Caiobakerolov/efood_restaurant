import ProductMeals from '../ProductMeals'
import DishPizza from '../../models/DishPizza'
import { Container, List } from './styles'

export type Props = {
  dishes: DishPizza[]
}

const ProductsListMeals = ({ dishes }: Props) => (
  <>
    <Container>
      <div>
        <List>
          {dishes.map((dish) => (
            <ProductMeals
              key={dish.id}
              image={dish.image}
              title={dish.title}
              description={dish.description}
            />
          ))}
        </List>
      </div>
    </Container>
  </>
)

export default ProductsListMeals

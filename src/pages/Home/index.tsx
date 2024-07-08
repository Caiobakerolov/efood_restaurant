import ProductsList from '../../components/ProductsList'
import Dish from '../../models/Dish'
import Header from '../../components/Header'
import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'

const meals: Dish[] = [
  {
    id: 1,
    image: sushi,
    infos: ['highlight of the week', 'Japanese'],
    title: 'Hioki Sushi',
    assessment: '4.9',
    description:
      'Order now the best of Japanese cuisine in the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, careful packaging, and guaranteed quality. Experience Japan without leaving your home with our delivery service!'
  },
  {
    id: 2,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Order now the best of Japanese cuisine in the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, careful packaging, and guaranteed quality. Experience Japan without leaving your home with our delivery service!'
  },
  {
    id: 3,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Order now the best of Japanese cuisine in the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, careful packaging, and guaranteed quality. Experience Japan without leaving your home with our delivery service!'
  },
  {
    id: 4,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Order now the best of Japanese cuisine in the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, careful packaging, and guaranteed quality. Experience Japan without leaving your home with our delivery service!'
  },
  {
    id: 5,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Order now the best of Japanese cuisine in the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, careful packaging, and guaranteed quality. Experience Japan without leaving your home with our delivery service!'
  },
  {
    id: 6,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Order now the best of Japanese cuisine in the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, careful packaging, and guaranteed quality. Experience Japan without leaving your home with our delivery service!'
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList dishes={meals} />
  </>
)

export default Home

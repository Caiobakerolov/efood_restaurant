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
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 3,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 4,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 5,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 6,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 7,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 8,
    image: pasta,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    assessment: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList dishes={meals} />
  </>
)

export default Home

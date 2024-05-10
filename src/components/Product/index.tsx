import Tag from '../Tag'
import { Card, Description, Title, Infos } from './styles'

type Props = {
  image: string
  infos: string[]
  title: string
  description: string
}

const Product = ({ image, title, description, infos }: Props) => (
  <>
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  </>
)

export default Product

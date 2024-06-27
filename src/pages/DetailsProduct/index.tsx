import { useParams } from 'react-router-dom'

const DetailsProduct = () => {
  const { id } = useParams()

  return (
    <>
      <div>Product {id}</div>
    </>
  )
}

export default DetailsProduct

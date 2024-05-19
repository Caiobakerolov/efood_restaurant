class Dish {
  image: string
  infos: string[]
  assessment: string
  title: string
  description: string
  id: number

  constructor(
    image: string,
    infos: string[],
    assessment: string,
    title: string,
    description: string,
    id: number
  ) {
    this.image = image
    this.infos = infos
    this.assessment = assessment
    this.title = title
    this.description = description
    this.id = id
  }
}

export default Dish

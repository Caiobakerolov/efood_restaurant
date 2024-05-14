import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'dishes'>>`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  padding-top: 100px;

  ${TagContainer} {
    position: relative;
  }

  img {
    width: 100%;
    height: auto;
  }
`

import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'dishes'>>`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  padding-top: 100px;

  img {
    width: 100%;
    height: auto;
  }
`

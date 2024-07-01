import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'dishes'>>`
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  padding-top: 56px;

  img {
    display: flex;
    margin: 0 auto;
    margin-top: 12px;
    width: 304px;
    height: 167px;
  }
`

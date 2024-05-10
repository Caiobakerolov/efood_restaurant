import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Container = styled.section`
  padding: 0 171px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1024px;
  height: 1290px;
  padding-top: 100px;

  ${TagContainer} {
    position: relative;
  }
`

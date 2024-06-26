import { colors } from '../../styles'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${colors.creamWhite};
  max-width: 100%;
  height: auto;

  div {
    padding-top: 40px;
  }

  img {
    display: block;
    justify-content: center;
    margin: 0 auto;
  }

  p {
    text-align: center;
    padding-bottom: 8px;

    a {
      color: red;
    }
  }
`

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: ${colors.orangeRed};
    font-size: 32px;
    text-decoration: none;
  }
`

export const Description = styled.p`
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 40px;
  margin-bottom: 16px;

  &::after {
    content: 'lies entirely with the contracted establishment.';
    display: block;
  }
`

import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.orangeRed};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 8px;
  width: 470px;

  img {
    border-radius: 8px 8px 0 0;
  }
`

export const Title = styled.h3`
  color: ${colors.creamWhite};
  font-size: 18px;
  font-weight: 700;
  display: block;
  padding: 8px;
`

export const Description = styled.p`
  color: ${colors.creamWhite};
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
  margin-bottom: 8px;
`

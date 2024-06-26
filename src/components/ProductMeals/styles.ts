import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.orangeRed};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 470px;
`

export const Title = styled.h3`
  color: ${colors.creamWhite};
  font-size: 18px;
  font-weight: 700;
  padding: 8px;
`

export const Description = styled.p`
  color: ${colors.creamWhite};
  font-size: 14px;
  line-height: 22px;
  padding: 8px;
  margin-bottom: 8px;
`

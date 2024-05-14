import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.orangeRed};
  colors: ${colors.creamWhite};
  font-size: 14px;
  font-weight: 700;
  width: 82px;
  height: 24px;
  align-items: center;
  padding: 4px 6px;
  border-radius: 8px;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.orangeRed};
  colors: ${colors.creamWhite};
  font-size: 14px;
  font-weight: 700;
  width: 90px;
  text-align: center;
  padding: 4px 6px;
  text-decoration: none;
  border-radius: 8px;
  margin-left: 8px;
  margin-bottom: 16px;
`

import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.orangeRed};
  colors: ${colors.creamWhite};
  font-size: 12px;
  font-weight: 700;
  align-items: center;
  padding: 6px 4px;
  border-radius: 8px;
  display: inline-block;
`

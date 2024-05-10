import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  border: 1px solid ${colors.orangeRed};
  width: 472px;
  height: 398px;
  display: inline-block;
  margin-left: 220px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    border-radius: 8px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute:
  top: 16px;
  right: 16px;
`

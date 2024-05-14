import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 8px;
  border: 1px solid ${colors.orangeRed};
  width: 470px;
  height: 400px;
  display: inline-block;
  margin-left: 220px;
  position: relative;
  margin-bottom: 48px;

  ${TagContainer} {
    position: absolute;
    top: 10px;
    display: flex;
  }

  img {
    border-radius: 8px 8px 0 0;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  display: block;
  padding: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 8px;
  right: 80px;
`

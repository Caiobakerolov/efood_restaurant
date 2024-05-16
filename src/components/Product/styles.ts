import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.orangeRed};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 8px;
  width: 470px;
  position: relative;

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
  margin-bottom: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;
`

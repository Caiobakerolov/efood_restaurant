import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import pasta from '../../assets/images/pasta.png'
import { colors } from '../../styles'

export const HeaderMeal = styled.header`
  background-image: url(https://efood-alpha-nine.vercel.app/static/media/fundoHero.784e90d06596c838a246.png);

  img {
    width: 125px;
    height: 57px;
    margin-top: 40px;
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
    width: 539px;
    height: 84px;
    margin: 0 auto;
    text-align: center;
    line-height: 42px;
    margin-top: 100px;
    margin-bottom: 40px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 40px;
`

export const BackgroundImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-top: 64px;

  .image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${pasta});
    background-size: cover;
    background-position: center;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .description {
    position: relative;
    z-index: 1;
    color: ${colors.white};
    font-size: 32px;
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    gap: 128px;
    margin-left: 380px;
    font-weight: 700;

    p {
      font-weight: 100;
    }
  }
`

export const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
`

import { createGlobalStyle } from 'styled-components'

export const colors = {
  orangeRed: '#E66767',
  creamWhite: '#FFEBD9',
  orangeLight: '#FFF8F2',
  white: '#FFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.orangeLight};
    color: ${colors.orangeRed};
  }
`

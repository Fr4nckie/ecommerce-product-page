import { createGlobalStyle } from 'styled-components'
import { colors } from './themes'

export const GlobalStyles = createGlobalStyle`
   * {
    padding: 0;
    margin: 0;
    outline: none;
    text-decoration: none;
    background: none;
    list-style: none;
    box-sizing: border-box;
    border: none;
    color: inherit;
   }

   body {
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: ${colors.dark_grayish_blue};
   }
`

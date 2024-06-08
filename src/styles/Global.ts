'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background-color: ${(props) => props.theme.colors.body};
    }

    a {
    color: inherit;
    text-decoration: none;
}

`

export default GlobalStyle

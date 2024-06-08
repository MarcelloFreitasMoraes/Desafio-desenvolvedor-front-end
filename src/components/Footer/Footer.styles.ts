'use client'

import styled from 'styled-components'

export const Content = styled.footer`
    background-color: ${(props) => props.theme.colors.secundary};
    padding: 10px 0;
    color: ${(props) => props.theme.colors.white};
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
`

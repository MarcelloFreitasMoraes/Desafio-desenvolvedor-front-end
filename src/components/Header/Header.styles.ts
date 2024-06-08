'use client'

import styled from 'styled-components'

export const Content = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
`

export const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Box = styled.div`
    display: flex;
    gap: 20px;
    color: ${(props) => props.theme.colors.white};
`

'use client'

import styled from 'styled-components'

export const Content = styled.div`
    background-color: ${(props) => props.theme.colors.primary};
    padding: 20px 0;
    width: 100%;
`

export const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const Box = styled.div`
    display: flex;
    gap: 20px;
    color: ${(props) => props.theme.colors.white};
`

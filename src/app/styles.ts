'use client'

import styled from 'styled-components'

export const Content = styled.div`
    padding-bottom: 20px;
`

export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    width: 100%;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 475px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

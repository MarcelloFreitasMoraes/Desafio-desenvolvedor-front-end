'use client'

import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 596px;
    border-radius: 4px;
    padding: 64px;
    gap: 24px;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    button {
        width: 170px;
    }
`
export const ImageBox = styled.div`
    position: relative;
    width: 433px;
    height: 350px;

    img {
        width: 100%;
        height: auto;

        @media screen and (max-width: 768px) {
            width: 100% !important;
            height: auto !important;
        }
    }

    @media screen and (max-width: 768px) {
        width: 150px;
        height: 200px;
    }
`

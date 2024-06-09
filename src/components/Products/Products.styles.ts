'use client'

import styled from 'styled-components'

export const Content = styled.div`
    margin: 50px auto;
`
export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 250px;
    height: 400px;
    max-width: 250px;

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
    }
    @media screen and (max-width: 744px) {
        justify-content: center;
    }
`

export const Box = styled.div`
    width: 100%;
    height: auto;

    text-align: center;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;

    img {
        margin-bottom: 10px;
    }

    h2::first-letter {
        text-transform: uppercase;
    }

    p {
        margin: 10px 0;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 20px;
    }
`

export const Pricing = styled.div`
    margin-bottom: 10px;
    font-size: 2em;
    font-weight: bold;

    sup {
        font-size: 0.5em;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

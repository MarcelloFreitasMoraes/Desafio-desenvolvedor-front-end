'use client'

import styled from 'styled-components'

export const Grid = styled.div`
    justify-content: space-between;
    display: flex;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

export const Content = styled.section`
    background-color: ${(props) => props.theme.colors.white};
    padding: 20px 0;
    border-radius: 10px;
    display: flex;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    position: relative;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        height: 100%;
    }
`

export const Wrapper = styled.div`
    margin-right: 2%;
    width: 100%;
`

export const Product = styled.div`
    padding-right: 20px;
    display: flex;
    align-items: center;
    height: 100%;

    img {
        width: 250px;
        height: 200px;
        border-radius: 10px;
    }

    @media screen and (max-width: 768px) {
        padding: 0 20px;

        img {
            width: 100%;
        }
    }
`

export const Detail = styled.div`
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 768px) {
        padding-top: 40px;
    }
`

export const Heading = styled.div`
    margin-bottom: 10px;

    > p:first-child {
        text-transform: capitalize;
        margin-bottom: 10px;
    }
`
export const HeadingPrice = styled.div`
    margin-bottom: 10px;
    text-align: center;
`

export const Price = styled.span`
    position: absolute;
    bottom: 40px;
    color: ${(props) => props.theme.colors.textLight};
    font-size: 2em;
    font-weight: bolder;

    sup {
        font-weight: bold;
    }

    @media screen and (max-width: 768px) {
        margin-top: 40px;
        position: relative;
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    right: 50px;

    button {
        cursor: pointer;
        margin: 20px 0;
        font-size: 1em;
        border-radius: 5px;
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
        padding: 5px 10px;
        transition: all 0.3s ease-out;
    }

    svg {
        color: ${(props) => props.theme.colors.primary};
        cursor: pointer;
    }

    span {
        padding: 0 5px;
    }

    div {
        margin: 0 5px;
    }

    @media screen and (max-width: 600px) {
        position: relative;
        left: 5px;
    }
`

export const Input = styled.input`
    width: 62px;
    height: 26px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    background-color: ${(props) => props.theme.colors.white};
    text-align: center;
`

export const Aside = styled.aside`
    background-color: ${(props) => props.theme.colors.white};
    width: 50%;
    height: 100%;
    padding: 18px;
    border-radius: 10px;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ListProducts = styled.ul`
    margin: 10px 0;

    li {
        color: ${(props) => props.theme.colors.textLight};
        font-size: 0.8em;
    }

    .uper {
        text-transform: capitalize;
    }

    sup {
        font-size: 0.5em;
    }
`

export const Finish = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    div > a {
        background-color: ${(props) => props.theme.colors.primary};
        padding: 10px 25px;
        border-radius: 5px;
        color: ${(props) => props.theme.colors.white};
        transition: all 0.3s ease;

        :hover {
            background-color: ${(props) => props.theme.colors.hoverPrimary};
            color: ${(props) => props.theme.colors.white};
        }
    }
`

export const Total = styled.sup`
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    h3 {
        text-transform: uppercase;
        font-size: 1em;
        font-weight: bold;
        letter-spacing: 1px;
    }

    span {
        font-weight: bolder;
    }
`

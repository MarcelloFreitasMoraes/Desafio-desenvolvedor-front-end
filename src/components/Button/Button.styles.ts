'use client'

import styled from 'styled-components'

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    margin: 20px auto;
    font-size: 1em;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    width: 80%;
    padding: 10px 0;
    justify-content: center;
    transition: all 0.3s ease-out;

    :hover {
        background-color: ${(props) => props.theme.colors.hoverPrimary};
    }

    &[disabled] {
        cursor: not-allowed;
        color: ${(props) => props.theme.colors.text};
        background-color: ${(props) => props.theme.colors.textLight};
    }
`

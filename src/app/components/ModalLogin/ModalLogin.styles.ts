import { Button } from '@/components'
import styled from 'styled-components'

export const Login = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
    padding: 10px;
    display: flex;
    position: fixed;
    right: 5%;
    top: -27px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    z-index: 2;

    @media screen and (max-width: 575px) {
        width: 300px;
        top: 30px;
        right: 48px;
    }
`

export const Heading = styled.form`
    div {
        padding: 0 5px;
    }

    label {
        padding-left: 10px;
        font-size: 0.7em;
        font-weight: bold;
        color: ${(props) => props.theme.colors.primary};
    }

    input {
        width: 100%;
        padding: 8px 10px;
        border: 2px solid ${(props) => props.theme.colors.primary};
        border-radius: 4px;
    }
    input:hover {
        border-color: ${(props) => props.theme.colors.secondary};
    }
    input:focus {
        border-color: ${(props) => props.theme.colors.secondary};
    }

    button {
        background-color: ${(props) => props.theme.colors.primary};
        width: 100px;
    }

    button:hover {
        background-color: ${(props) => props.theme.colors.hoverPrimary};
    }
`

export const Footer = styled.div`
    margin-top: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 5px;

    button {
        cursor: pointer;
        font-size: 1em;
        display: flex;
        margin: 0 auto;
        width: 100%;
        padding: 10px 0;
        justify-content: center;
    }
`

export const Logged = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;

    h3 {
        color: ${(props) => props.theme.colors.primary};
    }
`

export const Loggouf = styled.div`
    padding-top: 10px;

    h3 {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: ${(props) => props.theme.colors.primary};
    }
`
export const Entrar = styled.div`
    display: flex;

    Button {
        margin-top: 18px;
    }

    @media screen and (max-width: 575px) {
        display: block;
        align-items: inherit;
    }
`
export const Sair = styled.div`
    display: flex;
    flex-direction: column;

    button {
        margin: 10px auto;
    }
`

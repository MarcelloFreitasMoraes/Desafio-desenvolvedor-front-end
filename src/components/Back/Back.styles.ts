import { TiArrowBack } from 'react-icons/ti'
import styled from 'styled-components'

export const Content = styled.div`
    a {
        position: fixed;
        right: 10px;
        bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1%;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.primary};
        font-size: 2em;
    }
`

export const GoBack = styled(TiArrowBack)`
    color: ${(props) => props.theme.colors.white};
`

import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 500px;
    height: 50px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 15px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);

    input {
        flex: 1;
        height: 40px;
    }
`

export const Icon = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.5em;
    cursor: pointer;
    transition: all 0.3s ease-out;

    :hover {
        transition: all 0.3s ease-out;
        transform: rotate(45deg);
    }
`

'use client'

import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Box = styled.div`
    width: 100%;
    height: calc(100vh - 175px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 9999;
`

export const Spinner = styled.div<{ size: number }>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border: 6px solid ${(props) => props.theme.colors.secundary};
    border-top: 6px solid ${(props) => props.theme.colors.hoverSecondary};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`

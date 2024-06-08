'use client'

import React from 'react'
import { Contant } from './Container.styles'
import { ContainerProps } from './types'

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <Contant>{children}</Contant>
}

export default Container

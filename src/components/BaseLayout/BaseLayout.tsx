'use client'

import React from 'react'
import Header from '../Header/Header'
import { BaseLayoutrProps } from './types'
import { ContainerChildren } from './BaseLayout.styles'
import Footer from '../Footer/Footer'

const BaseLayout: React.FC<BaseLayoutrProps> = ({ children, isLogged }) => {
    const loggedInUser = isLogged ?? ''
    return (
        <>
            <Header isLogged={loggedInUser} />
            <ContainerChildren>{children}</ContainerChildren>
            <Footer />
        </>
    )
}

export default BaseLayout

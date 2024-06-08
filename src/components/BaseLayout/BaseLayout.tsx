'use client'

import React from 'react'
import Header from '../Header/Header'
import { BaseLayoutrProps } from './types'
import { ContainerChildren } from './BaseLayout.styles'
import Footer from '../Footer/Footer'

const BaseLayout: React.FC<BaseLayoutrProps> = ({ children }) => {
    return (
        <>
            <Header />
            <ContainerChildren>{children}</ContainerChildren>
            <Footer />
        </>
    )
}

export default BaseLayout

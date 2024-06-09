'use client'

import Image from 'next/image'
import React from 'react'
import TypographicComponent from '../Typographic/Typographic'
import { useRouter } from 'next/navigation'
import { EmptyProps } from './types'
import { Button } from '..'
import { Container, ImageBox } from './Empty.styled'

const Empty: React.FC<EmptyProps> = ({ image, title }) => {
    const { push } = useRouter()
    return (
        <Container>
            <TypographicComponent
                large
                primary={'true'}
                title={title}
                weight="bold"
            />
            <ImageBox>
                <Image src={image} layout="fill" alt="reload" />
            </ImageBox>
            <Button onClick={() => push(`/`)}>Recarregar página</Button>
        </Container>
    )
}

export default Empty

'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import Logo from '../../../public/complet.png'
import { Container } from './Purchase.styled'
import TypographicComponent from '@/components/Typographic/Typographic'
import { Button } from '@/components'

const Purchase: React.FC = () => {
    const { push } = useRouter()
    return (
        <Container>
            <TypographicComponent
                large
                title={'Compra realizada com sucesso!'}
                weight="bold"
            />
            <Image src={Logo} alt="car" />
            <Button onClick={() => push(`/`)}>Voltar</Button>
        </Container>
    )
}

export default Purchase

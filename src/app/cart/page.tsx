'use client'

import React from 'react'
import Link from 'next/link'
import Back from '@/components/Back'
import useCartData from '@/hooks/useCheckData'
import { Container, Error, Loading } from '@/components'
import CardCheckout from './components/CardCheckout/CardCheckout'

const Cart: React.FC = () => {
    const { CartQuery, LoadingCart } = useCartData()

    if (Array.isArray(CartQuery?.data) && CartQuery?.data.length < 0) {
        return <Error />
    }

    if (LoadingCart) {
        return <Loading />
    }

    return (
        <Container>
            <CardCheckout data={CartQuery?.data} />
            <Back />
        </Container>
    )
}

export default Cart

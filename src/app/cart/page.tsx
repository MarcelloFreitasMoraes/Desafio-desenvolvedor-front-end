'use client'

import React from 'react'
import Back from '@/components/Back'
import useCartData from '@/hooks/useCheckData'
import { Container, Loading } from '@/components'
import CardCheckout from '../components/CardCheckout/CardCheckout'
import Logo from '../../../public/not-product.png'
import Mobile from '../../../public/not-product-mobile.png'
import Empty from '@/components/Empty/Empty'
import { useWindowResize } from '@/utils/useWindowResize'

const Cart: React.FC = () => {
    const { CartQuery, LoadingCart } = useCartData()
    const showArrows = useWindowResize(768, true)
    const Image = showArrows ? Mobile : Logo

    if (typeof window !== 'undefined') {
        document.title = 'Mercado Fruta | Carrinho'
    }

    if (LoadingCart) {
        return <Loading />
    }

    return (
        <Container>
            {CartQuery && Object.keys(CartQuery).length > 0 ? (
                <CardCheckout data={CartQuery} />
            ) : (
                <Empty
                    image={Image}
                    title="Parece que não há nada por aqui :("
                />
            )}
            <Back />
        </Container>
    )
}

export default Cart

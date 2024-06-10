'use client'

import Search from '@/components/Search/Search'
import { Carrossel, ContainerCard, Content } from './styles'
import SliderComponent from '@/components/Slider/Slider'
import { Container, Loading, Products } from '@/components'
import useListData from '@/hooks/useListProdutosData'
import { Fragment, Suspense, useState } from 'react'
import { IMovieCart } from '@/hooks/types'
import useCartData from '@/hooks/useCheckData'

export default function Home() {
    const { ListProductsQuery, LoadingListProducts } = useListData()
    const { CartMutation, ModalOpen, SetOpen } = useCartData()
    const [value, setValue] = useState<string>('')
    const isLogged =
        typeof localStorage !== 'undefined'
            ? localStorage.getItem('Logged')
            : null

    if (typeof window !== 'undefined') {
        document.title = 'Mercado Fruta | Início'
    }

    return (
        <Container>
            <Content>
                <Search search={value} setSearch={setValue} />
            </Content>
            <Carrossel>
                <SliderComponent />
            </Carrossel>

            <Suspense fallback={<Loading />}>
                <ContainerCard>
                    {ListProductsQuery &&
                        Object.entries(ListProductsQuery).map(
                            ([_, productsArray]) =>
                                productsArray.map(
                                    (product: IMovieCart, index: number) => {
                                        const totalSun =
                                            product.price?.toLocaleString(
                                                'pt-BR',
                                                {
                                                    minimumFractionDigits: 2,
                                                }
                                            ) ?? '0,00'

                                        return (
                                            <Fragment key={`product_${index}`}>
                                                <Products
                                                    image={product.image || ''}
                                                    name={product.name || ''}
                                                    description={
                                                        product.description ||
                                                        ''
                                                    }
                                                    price={totalSun}
                                                    onClick={() =>
                                                        CartMutation.mutate({
                                                            ...product,
                                                        })
                                                    }
                                                    check={ModalOpen}
                                                    setCheck={SetOpen}
                                                    isLogged={isLogged}
                                                />
                                            </Fragment>
                                        )
                                    }
                                )
                        )}
                </ContainerCard>
            </Suspense>
        </Container>
    )
}

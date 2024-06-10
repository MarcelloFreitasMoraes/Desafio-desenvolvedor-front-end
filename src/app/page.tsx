'use client'

import Search from '@/components/Search/Search'
import { ContainerCard, Content } from './styles'
import SliderComponent from '@/components/Slider/Slider'
import { Container, Loading, Products } from '@/components'
import useListData from '@/hooks/useListProdutosData'
import { Fragment, SetStateAction, useState } from 'react'
import { IMovieCart } from '@/hooks/types'
import useCartData from '@/hooks/useCheckData'

export default function Home() {
    const { ListProductsQuery, LoadingListProducts } = useListData()
    const { CartMutation, ModalOpen, SetOpen, LoadingCart } = useCartData()
    const [value, setValue] = useState<string>('')

    if (LoadingListProducts) {
        return <Loading />
    }

    return (
        <Container>
            <Content>
                <Search search={value} setSearch={setValue} />
            </Content>
            <SliderComponent />

            <ContainerCard>
                {ListProductsQuery &&
                    Object.entries(ListProductsQuery).map(
                        ([_, productsArray]) =>
                            productsArray.map(
                                (product: IMovieCart, index: number) => {
                                    const totalSun =
                                        product.price?.toLocaleString('pt-BR', {
                                            minimumFractionDigits: 2,
                                        }) ?? '0,00'

                                    return (
                                        <Fragment key={`product_${index}`}>
                                            <Products
                                                image={product.image || ''}
                                                name={product.name || ''}
                                                description={
                                                    product.description || ''
                                                }
                                                price={totalSun}
                                                onClick={() =>
                                                    CartMutation.mutate({
                                                        ...product,
                                                    })
                                                }
                                                check={ModalOpen}
                                                setCheck={SetOpen}
                                            />
                                        </Fragment>
                                    )
                                }
                            )
                    )}
            </ContainerCard>
        </Container>
    )
}

'use client'

import Search from '@/components/Search/Search'
import { ContainerCard, Content } from './styles'
import SliderComponent from '@/components/Slider/Slider'
import { Container, Loading, Products } from '@/components'
import { useRouter } from 'next/navigation'
import useListData from '@/hooks/useListProdutosData'
import { Fragment } from 'react'
import { IMovieCart } from '@/hooks/types'
import useCartData from '@/hooks/useCheckData'

export default function Home() {
    const { push } = useRouter()
    const { ListProductsQuery, LoadingListProducts } = useListData()
    const { CartMutation } = useCartData()

    if (LoadingListProducts) {
        return <Loading />
    }

    const search = 'banana'

    const resultSearch = () => {
        push(`/resultado-busca?fruta=${search}`)
    }

    return (
        <Container>
            <Content>
                <Search
                    search={''}
                    setSearch={() => {}}
                    resultSearch={resultSearch}
                />
            </Content>
            <SliderComponent />

            <ContainerCard>
                {ListProductsQuery &&
                    Object.entries(ListProductsQuery).map(
                        ([_, productsArray]) =>
                            productsArray.map((product: IMovieCart) => {
                                const amount = product.amount ?? 0
                                return (
                                    <Fragment key={product.id}>
                                        <Products
                                            image={product.image || ''}
                                            name={product.name || ''}
                                            description={
                                                product.description || ''
                                            }
                                            price={product.price || ''}
                                            onClick={() =>
                                                CartMutation.mutate({
                                                    ...product,
                                                    amount: amount + 1,
                                                })
                                            }
                                        />
                                    </Fragment>
                                )
                            })
                    )}
            </ContainerCard>
        </Container>
    )
}

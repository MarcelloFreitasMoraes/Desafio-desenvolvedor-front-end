'use client'

import Search from '@/components/Search/Search'
import { ContainerCard, Content } from './styles'
import SliderComponent from '@/components/Slider/Slider'
import { Container, Loading, Products } from '@/components'
import { useRouter } from 'next/navigation'
import useListData from '@/hooks/useListProdutosData'
import { Fragment } from 'react'
import { ListData } from '@/hooks/types'

export default function Home() {
    const { push } = useRouter()
    const { ListProductsQuery, LoadingListProducts } = useListData()

    if (LoadingListProducts) {
        return <Loading />
    }

    let search = 'banana'

    const resultSearch = () => {
        push(`/resultado-busca?fruta=${search}`)
    }
    console.log(process.env.NEXT_PUBLIC_IMAGE_DOMAINS)

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
                    Object.entries(ListProductsQuery)?.map(
                        ([_, productsArray]) => {
                            console.log(productsArray, 'productsArray')
                            return productsArray.map((product: ListData) => (
                                <Fragment key={`${product.id}`}>
                                    <Products
                                        image={product?.image}
                                        name={product?.name}
                                        description={product?.description}
                                        price={product?.price}
                                        onClick={() => {}}
                                    />
                                </Fragment>
                            ))
                        }
                    )}
            </ContainerCard>
        </Container>
    )
}

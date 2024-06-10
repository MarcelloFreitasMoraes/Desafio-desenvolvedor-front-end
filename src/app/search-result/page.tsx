'use client'
import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import useListData from '@/hooks/useListProdutosData'
import useCartData from '@/hooks/useCheckData'
import { Container, Empty, Loading, Products, Search } from '@/components'
import { IMovieCart } from '@/hooks/types'
import { Fragment } from 'react'
import { ContainerCard, Content } from '../styles'
import Logo from '../../../public/not-product.png'
import Mobile from '../../../public/not-product-mobile.png'
import { useWindowResize } from '@/utils/useWindowResize'

const SearchResult: React.FC = () => {
    const searchParams = useSearchParams()
    const fruta = searchParams.get('fruta')?.toLowerCase() || ''
    const { ListProductsQuery, LoadingListProducts } = useListData()
    const { CartMutation } = useCartData()
    const [searchValue, setSearchValue] = useState<string>('')
    const [filterValue, setFilterValue] = useState<string>(fruta)
    const showArrows = useWindowResize(768, true)
    const Image = showArrows ? Mobile : Logo

    useEffect(() => {
        if (fruta) {
            setFilterValue(fruta)
        }
    }, [fruta])

    const filteredProducts = useMemo(() => {
        if (!ListProductsQuery) return []

        return Object.entries(ListProductsQuery).flatMap(([_, productsArray]) =>
            productsArray.filter((product: IMovieCart) =>
                product?.name?.toLowerCase().includes(filterValue)
            )
        )
    }, [ListProductsQuery, filterValue])

    if (LoadingListProducts) {
        return <Loading />
    }

    return (
        <Container>
            <Content>
                <Search search={searchValue} setSearch={setSearchValue} />
            </Content>
            {filteredProducts.length > 0 ? (
                <ContainerCard>
                    {filteredProducts.map(
                        (product: IMovieCart, index: number) => {
                            const totalSun =
                                product.price?.toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                }) ?? 0

                            return (
                                <Fragment key={`product_${index}`}>
                                    <Products
                                        image={product.image || ''}
                                        name={product.name || ''}
                                        description={product.description || ''}
                                        price={totalSun}
                                        onClick={() =>
                                            CartMutation.mutate({
                                                ...product,
                                            })
                                        }
                                    />
                                </Fragment>
                            )
                        }
                    )}
                </ContainerCard>
            ) : (
                <Empty
                    image={Image}
                    title="Parece que não há nada por aqui :("
                />
            )}
        </Container>
    )
}

export default SearchResult

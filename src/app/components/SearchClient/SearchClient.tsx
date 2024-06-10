'use client'
import useCartData from '@/hooks/useCheckData'
import useListData from '@/hooks/useListProdutosData'
import { useWindowResize } from '@/utils/useWindowResize'
import React, { Fragment, Suspense, useEffect, useMemo, useState } from 'react'
import Logo from '../../../../public/not-product.png'
import Mobile from '../../../../public/not-product-mobile.png'
import { IMovieCart } from '@/hooks/types'
import { Empty, Loading, Products, Search } from '@/components'
import { ContainerCard, Content } from '@/app/styles'

const SearchClient: React.FC<{ fruta: string }> = ({ fruta }) => {
    const { ListProductsQuery, LoadingListProducts } = useListData()
    const { CartMutation, ModalOpen, SetOpen } = useCartData()
    const [searchValue, setSearchValue] = useState<string>('')
    const [filterValue, setFilterValue] = useState<string>(fruta)
    const showArrows = useWindowResize(768, true)
    const isLogged =
        typeof localStorage !== 'undefined'
            ? localStorage.getItem('Logged')
            : null
    const Image = showArrows ? Mobile : Logo
    if (typeof window !== 'undefined') {
        document.title = 'Mercado Fruta | Início'
    }

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

    return (
        <>
            <Content>
                <Search search={searchValue} setSearch={setSearchValue} />
            </Content>
            <Suspense fallback={<Loading />}>
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
                                            isLogged={isLogged}
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
            </Suspense>
        </>
    )
}

export default SearchClient

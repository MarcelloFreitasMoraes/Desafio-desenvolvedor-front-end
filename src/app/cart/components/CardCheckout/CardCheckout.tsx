import React, { useEffect } from 'react'
import Image from 'next/image'
import {
    Buttons,
    Content,
    Detail,
    Grid,
    Heading,
    Price,
    Product,
    Wrapper,
} from './CardCheckout.styles'
import { FaTrash } from 'react-icons/fa'
import { DataProps } from './types'
import CardPrice from './CardPrice'
import useCartData from '@/hooks/useCheckData'
import { IMovieCart } from '@/hooks/types'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const CardCheckout: React.FC<DataProps> = ({ data }) => {
    const { CartMutation } = useCartData()

    const total =
        data &&
        Object.values(data)?.reduce(
            (sum, item) => sum + parseFloat(item.total),
            0
        )
    const totalSun = total?.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
    })

    return (
        <Grid>
            <Wrapper>
                {data &&
                    Object.entries(data).map(
                        ([key, fruit]: [string, IMovieCart]) => {
                            const amount = fruit?.amount ?? 1
                            const totalPrice =
                                amount > 1 ? fruit?.total : fruit?.price
                            return (
                                <Content key={fruit?.id}>
                                    <Product>
                                        <Image
                                            src={
                                                fruit?.image as
                                                    | string
                                                    | StaticImport
                                            }
                                            alt={fruit?.name as string}
                                            width={250}
                                            height={200}
                                        />
                                    </Product>

                                    <Detail>
                                        <Heading>
                                            <h2>{fruit?.name}</h2>
                                            <p>{fruit?.description}</p>
                                        </Heading>

                                        <Price>
                                            <sup>R$</sup>
                                            <span>
                                                {totalPrice?.toLocaleString(
                                                    'pt-BR',
                                                    {
                                                        minimumFractionDigits: 2,
                                                    }
                                                )}
                                            </span>
                                        </Price>

                                        <Buttons>
                                            <span>Quantidade:</span>
                                            <span>{fruit?.amount}</span>
                                            <span
                                                onClick={() =>
                                                    CartMutation.mutate({
                                                        key,
                                                        delete: true,
                                                        ...fruit,
                                                    })
                                                }
                                            >
                                                <FaTrash size={16} />
                                            </span>
                                        </Buttons>
                                    </Detail>
                                </Content>
                            )
                        }
                    )}
            </Wrapper>
            <CardPrice
                data={data}
                fruitsSelected={undefined}
                total={totalSun}
            />
        </Grid>
    )
}

export default CardCheckout

import React, { useEffect } from 'react'
import Image from 'next/image'
import {
    Aside,
    Buttons,
    Content,
    Detail,
    Finish,
    Grid,
    Heading,
    Items,
    ListProducts,
    Price,
    Product,
    Total,
    Wrapper,
} from './CardCheckout.styles'
import { FaTrash } from 'react-icons/fa'
import { ListData } from '@/hooks/types'
import { DataProps } from './types'
import CardPrice from './CardPrice'

const CardCheckout: React.FC<DataProps> = ({ data }) => {
    const fruitsSelected = []
    const total = 0
    // const prices = data &&
    // Object.entries(data)?.map((som: { price: string }) => {
    //     return parseFloat(som?.price?.replace(',', '.'))
    // })

    // const totalCheckout = prices?.reduce((acumulado: number, x: number) => {
    //     return acumulado + x
    // }, 0)

    // const total = totalCheckout?.toString().replace('.', ',')

    return (
        <Grid>
            <Wrapper>
                {data &&
                    Object.entries(data)?.map((fruit) => (
                        <Content key={fruit[1]?.id}>
                            <Product>
                                <Image
                                    src={fruit[1]?.image}
                                    alt={fruit[1]?.name}
                                    width={250}
                                    height={200}
                                />
                            </Product>

                            <Detail>
                                <Heading>
                                    <h2>{fruit[1]?.name}</h2>
                                    <p>{fruit[1]?.description}</p>
                                </Heading>

                                <Price>
                                    <sup>R$</sup>
                                    <span>{fruit[1]?.price}</span>
                                </Price>

                                <Buttons>
                                    <span>Quantidade:</span>
                                    <span>{fruit[1]?.amount}</span>
                                    <span onClick={() => {}}>
                                        <FaTrash size={16} />
                                    </span>
                                </Buttons>
                            </Detail>
                        </Content>
                    ))}
            </Wrapper>
            <CardPrice data={data} fruitsSelected={undefined} total={''} />
        </Grid>
    )
}

export default CardCheckout

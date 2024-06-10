import React, { useState } from 'react'
import Image from 'next/image'
import {
    Buttons,
    Content,
    Detail,
    Grid,
    Heading,
    Input,
    Price,
    Product,
    Wrapper,
} from './CardCheckout.styles'
import { FaTrash } from 'react-icons/fa'
import { DataProps } from './types'
import CardPrice from './CardPrice'
import useCartData from '@/hooks/useCheckData'
import { IMovieCart } from '@/hooks/types'
import TypographicComponent from '@/components/Typographic/Typographic'
import { Loading } from '@/components'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

const CardCheckout: React.FC<DataProps> = ({ data }) => {
    const { CartMutation, LoadingCart } = useCartData()
    const [isDeleting, setIsDeleting] = useState<boolean>(false)

    if (isDeleting || LoadingCart) {
        return <Loading />
    }

    const handleDelete = (key: string, fruit: IMovieCart) => {
        setIsDeleting(true)

        CartMutation.mutate(
            {
                key,
                ...fruit,
                delete: true,
            },
            {
                onSettled: () => setIsDeleting(false),
            }
        )
    }
    const total =
        data &&
        Object.values(data)?.reduce(
            (sum, item) => sum + parseFloat(item?.total),
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
                        ([key, fruit]: [string, IMovieCart], index) => {
                            const amount = fruit?.amount ?? 1
                            const totalPrice =
                                amount > 1 ? fruit?.total : fruit?.price
                            const resultTotal =
                                totalPrice?.toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                }) ?? '0,00'

                            return (
                                <Content key={`product_${index}`}>
                                    <Product>
                                        <Image
                                            src={fruit?.image as string}
                                            alt={fruit?.name as string}
                                            width={250}
                                            height={200}
                                        />
                                    </Product>

                                    <Detail>
                                        <Heading>
                                            <TypographicComponent
                                                large
                                                title={fruit?.name ?? ''}
                                                weight="bold"
                                            />
                                            <TypographicComponent
                                                regular
                                                title={fruit?.description ?? ''}
                                            />
                                        </Heading>

                                        <Price>
                                            <TypographicComponent
                                                large
                                                supTitle="R$"
                                                title={resultTotal}
                                                weight="bold"
                                            />
                                        </Price>

                                        <Buttons>
                                            <span>Quantidade:</span>
                                            <div
                                                onClick={() =>
                                                    CartMutation.mutate({
                                                        key,
                                                        ...fruit,
                                                        decrement: true,
                                                    })
                                                }
                                            >
                                                <AiOutlineMinusCircle
                                                    size={16}
                                                />
                                            </div>
                                            <Input
                                                type="text"
                                                disabled
                                                value={fruit?.amount}
                                            />

                                            <div
                                                onClick={() =>
                                                    CartMutation.mutate({
                                                        key,
                                                        ...fruit,
                                                        decrement: false,
                                                    })
                                                }
                                            >
                                                <AiOutlinePlusCircle
                                                    size={16}
                                                />
                                            </div>
                                            <div
                                                onClick={() =>
                                                    handleDelete(key, fruit)
                                                }
                                            >
                                                <FaTrash size={16} />
                                            </div>
                                        </Buttons>
                                    </Detail>
                                </Content>
                            )
                        }
                    )}
            </Wrapper>

            <CardPrice
                data={data}
                total={totalSun}
                setIsDeleting={setIsDeleting}
            />
        </Grid>
    )
}

export default CardCheckout

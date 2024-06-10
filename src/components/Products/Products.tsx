'use client'

import Modal from '@/app/components/Modal/Modal'
import Button from '../Button/Button'
import TypographicComponent from '../Typographic/Typographic'
import { Box, Content, Grid, Pricing } from './Products.styles'
import { ProdutoctsProps } from './types'
import Image from 'next/image'

const Products: React.FC<ProdutoctsProps> = ({
    image,
    name,
    description,
    price,
    onClick,
    setCheck,
    check,
    isLogged,
}) => {
    return (
        <Content>
            <Grid>
                <Box>
                    <Image src={image} alt={name} width={200} height={200} />
                    <TypographicComponent large title={name} weight="bold" />
                    <TypographicComponent regular title={description} />

                    <Pricing>
                        <TypographicComponent
                            large
                            title={price as string}
                            weight="bold"
                            supTitle="R$"
                        />
                    </Pricing>
                    {isLogged ? (
                        <Button onClick={onClick}>Adicionar ao Carrinho</Button>
                    ) : (
                        <Button disabled>Logue para comprar</Button>
                    )}
                </Box>
            </Grid>
            <Modal check={check} setCheck={setCheck} />
        </Content>
    )
}

export default Products

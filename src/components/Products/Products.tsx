'use client'

import Button from '../Button/Button'
import { Box, Content, Grid, Pricing } from './Products.styles'
import { ProdutoctsProps } from './types'
import Image from 'next/image'

const Products: React.FC<ProdutoctsProps> = ({
    image,
    name,
    description,
    price,
    onClick,
}) => {
    // const [check, setCheck] = useState<boolean>(false)

    // const openChecked = () => {
    //     setCheck((prev) => !prev)
    // }

    // const addCheckout = (data: {
    //     name: string
    //     image: string
    //     description: string
    //     price: string
    // }) => {
    //     axios.post(CHECK, data)
    //     .then((res) => {
    //       openChecked()
    //     })
    //     .catch((error) => {
    //       alert('Ocorreu um erro ao adicionar o item ao carrinho.')
    //       console.error(error)
    //     })

    // }
    return (
        <Content>
            <Grid>
                <Box>
                    <Image src={image} alt={name} width={200} height={200} />
                    <h2>{name}</h2>
                    <p>{description}</p>

                    <Pricing>
                        <sup>R$</sup>
                        <span>{price}</span>
                    </Pricing>

                    {/* {isLogged ? ( */}
                    <Button onClick={onClick}>Adicionar ao Carrinho</Button>
                    {/* ) : (
                                    <Button
                                        label="Logue para comprar"
                                        disabled
                                    />
                                )} */}
                </Box>
                {/* )
                    )} */}
            </Grid>
            {/* <Checked check={check} setCheck={setCheck} /> */}
        </Content>
    )
}

export default Products

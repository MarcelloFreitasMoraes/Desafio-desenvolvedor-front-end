'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/logo.png'
import Link from 'next/link'
import { Box, Content, Grid } from './Header.styles'
import Container from '../Container/Container'
import { BiCart } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'

const Header: React.FC = () => {
    return (
        <Content>
            <Container>
                <Grid>
                    <Link href={'/'}>
                        <Image src={Logo} alt="logo" />
                    </Link>
                    <Box>
                        <Link href={'/'}>Home</Link>
                        <Link href={'#'}>Ofertas</Link>
                        <Link href={'/cart'}>
                            <BiCart size={'24px'} />
                        </Link>
                        <Link href={'#'}>
                            <FaUserCircle size={'24px'} />
                        </Link>
                    </Box>
                </Grid>
            </Container>
        </Content>
    )
}

export default Header

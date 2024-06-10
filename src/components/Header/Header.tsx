'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../../public/logo.png'
import Link from 'next/link'
import { Box, Content, Grid, Icons } from './Header.styles'
import Container from '../Container/Container'
import { BiCart } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import ModalLogin from '@/app/components/ModalLogin/ModalLogin'

const Header: React.FC<{ isLogged: string | null | undefined }> = ({
    isLogged,
}) => {
    const [showModal, setShowModal] = useState<boolean>(false)

    const openModal = () => {
        setShowModal(true)
    }
    const closedModal = () => {
        setShowModal(false)
    }
    return (
        <Content>
            <Container>
                <Grid>
                    <Link href={'/'}>
                        <Image src={Logo} alt="logo" />
                    </Link>
                    <Box>
                        <Link href={'/'}>Início</Link>
                        <Link href={'/cart'}>
                            <BiCart size={'24px'} />
                        </Link>
                        <Icons>
                            <button onClick={openModal}>
                                <FaUserCircle size={'24px'} />
                            </button>
                        </Icons>
                    </Box>
                </Grid>
            </Container>
            <ModalLogin
                showModal={showModal}
                isLogged={isLogged}
                closeModal={closedModal}
            />
        </Content>
    )
}

export default Header

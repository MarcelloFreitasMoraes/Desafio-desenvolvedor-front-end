'use client'

import React from 'react'
import { Background } from './Loading.styled'
import Image from 'next/image'
import loadingGif from '../../../public/loading.gif'

const Loading: React.FC = () => {
    return (
        <Background>
            <Image src={loadingGif} width={300} height={300} alt="Loading..." />
        </Background>
    )
}

export default Loading

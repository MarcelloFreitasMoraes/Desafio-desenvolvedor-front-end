'use client'

import React from 'react'
import Image from 'next/image'
import Back from '../Back'
import { Err } from './Error.styles'
import Empty from '../../../public/empty.png'

const Error: React.FC = () => {
    return (
        <Err
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '5.1%',
            }}
        >
            <Image src={Empty} alt={'empty'} />
            <Back />
        </Err>
    )
}

export default Error

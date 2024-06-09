import React from 'react'
import Link from 'next/link'
import { Content, GoBack } from './Back.styles'

const Back: React.FC = () => {
    return (
        <Content>
            <Link href={'/'}>
                <GoBack />
            </Link>
        </Content>
    )
}

export default Back

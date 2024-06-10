'use client'

import Container from '../Container/Container'
import TypographicComponent from '../Typographic/Typographic'
import { Content } from './Footer.styles'

const Footer: React.FC = () => {
    return (
        <Content>
            <Container>
                <TypographicComponent
                    regular
                    primary="true"
                    title={'Copyright | Marcelo Moraes - 2024'}
                />
            </Container>
        </Content>
    )
}

export default Footer

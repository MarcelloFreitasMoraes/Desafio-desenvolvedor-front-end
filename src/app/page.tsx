'use client'

import Search from '@/components/Search/Search'
import { Content } from './styles'
import SliderComponent from '@/components/Slider/Slider'
import { Container, Products } from '@/components'
import { useRouter } from 'next/navigation'

export default function Home() {
    const { push } = useRouter()
    let search = 'banana'

    const resultSearch = () => {
        push(`/resultado-busca?fruta=${search}`)
    }

    return (
        <Container>
            <Content>
                <Search
                    search={''}
                    setSearch={() => {}}
                    resultSearch={resultSearch}
                />
            </Content>
            <SliderComponent />
            <Products
                image={''}
                name={''}
                description={''}
                price={''}
                onClick={() => {}}
            />
        </Container>
    )
}

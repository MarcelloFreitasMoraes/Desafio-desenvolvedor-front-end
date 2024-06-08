import { DataProps } from '@/global/@types/data'

export interface ProdutoctsProps {
    image: string
    name: string
    description: string
    price: string
    onClick: () => void
    // isLogged: boolean
}

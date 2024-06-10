import { DataProps } from '@/global/@types/data'

export interface ProdutoctsProps {
    image: string
    name: string
    description: string
    price: number | string
    onClick: () => void
    check: boolean
    setCheck: React.Dispatch<React.SetStateAction<boolean>>
}

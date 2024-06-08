import { Total } from './../Car/styles'
import { DataProps } from '@/global/@types/data'

export interface SearchProps {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    resultSearch: () => void
}

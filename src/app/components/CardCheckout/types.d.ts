import { Total } from './CardCheckout.styles'
import { ListData } from '@/hooks/types'

export interface DataProps {
    data: ListData | undefined
}

export interface DataPriceProps {
    data: ListData | undefined
    total: string
    setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>
}

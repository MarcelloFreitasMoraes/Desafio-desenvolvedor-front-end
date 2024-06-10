'use client'

import { useQuery } from '@tanstack/react-query'
import { ListData } from './types'
import { CartService } from '@/service/useServiceData'

const cartService = new CartService()

export default function useListData() {
    const { data: ListProductsQuery, isLoading } = useQuery<ListData>({
        queryKey: ['list'],
        queryFn: cartService.fetchList,
    })

    return {
        ListProductsQuery,
        LoadingListProducts: isLoading,
    }
}

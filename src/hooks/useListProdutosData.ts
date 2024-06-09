'use client'

import { fetchList } from '@/service/useData'
import { useQuery } from '@tanstack/react-query'
import { ListData } from './types'

export const ProductsKey = 'ProductsData'

export default function useListData() {
    const { data: products, isLoading } = useQuery<ListData>({
        queryKey: ['list'],
        queryFn: fetchList,
    })

    return {
        ListProductsQuery: products,
        LoadingListProducts: isLoading,
    }
}

'use client'

import { fetchList } from '@/service/useData'
import { useQuery } from '@tanstack/react-query'
import { ListData } from './types'

export const ProductsKey = 'ProductsData'

export default function useListData() {
    const {
        data: products,
        isLoading,
        isRefetching,
    } = useQuery<ListData>({
        queryKey: ['list'],
        queryFn: fetchList,
    })

    // const mutation = useMutation(
    //     async (values: { amount: number }) => {
    //         const method = 'post'
    //         const body = { ...values, amount: values.amount + 1 }
    //         return http[method](`checkout`, body)
    //     },
    //     {
    //         onSuccess: () => {
    //             isRefetching
    //         },
    //     },
    // )

    return {
        ListProductsQuery: products,
        LoadingListProducts: isLoading,
    }
}

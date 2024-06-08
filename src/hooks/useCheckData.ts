'use client'

import { fetchProducts } from '@/service/useData'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ListData } from './types'
import { http } from '@/service/http'

export const ProductsKey = 'ProductsData'

export default function useCheckData() {
    const {
        data: products,
        isLoading,
        isRefetching,
    } = useQuery<ListData>({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    const mutation = useMutation(
        async (values: { amount: number }) => {
            const method = 'post'
            const body = { ...values, amount: values.amount + 1 }
            return http[method](`/frutas/checkout.json`, body)
        },
        {
            onSuccess: () => {
                isRefetching
            },
        }
    )

    return {
        CheckeQuery: products,
        LoadingChecke: isLoading,
        ProductsMutation: mutation,
    }
}

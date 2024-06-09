'use client'

import { CartService } from '@/service/useData'
import { useMutation, useQuery } from '@tanstack/react-query'
import { IMovieCart } from './types'
import { http } from '@/service/http'
import { useMovieStore } from './stores/useMovieStore'
import stale from '@/utils/stale'

export default function useCartData(id?: string | string[] | undefined) {
    const { setMoviesInCart, showToast, moviesInCart } = useMovieStore()

    const query = useQuery<IMovieCart | undefined>(
        [['cartMovies'], id],
        () =>
            http
                .get(`/frutas/checkout.json`)
                .then((res) => res?.data || {})
                .catch((error) => console.log(error)),
        {
            staleTime: stale.never,
            cacheTime: 0,
            enabled: true,
        }
    )

    const mutation = useMutation(
        (values: IMovieCart) => {
            const existingEntries = query.data ? Object.entries(query.data) : []
            const existingEntry = existingEntries.find(
                ([_, item]) => item.id === values.id
            )

            if (values.delete) {
                console.log('DELETE')
                return http.delete(
                    `/frutas/checkout/${
                        existingEntry ? existingEntry[0] : id
                    }.json`
                )
            } else {
                if (existingEntry) {
                    console.log('PUT')
                    const [key, existingItem] = existingEntry
                    const updatedValues = {
                        ...values,
                        amount: existingItem.amount + 1,
                        total: (
                            parseFloat(existingItem.price) *
                            (existingItem.amount + 1)
                        ).toFixed(2),
                    }
                    return http.put(
                        `/frutas/checkout/${key}.json`,
                        updatedValues
                    )
                } else {
                    console.log('POST')
                    const body = { ...values, amount: 1 }
                    return http.post(`/frutas/checkout.json`, body)
                }
            }
        },
        {
            onSuccess: () => {
                query.refetch()
            },
        }
    )

    return {
        CartQuery: query,
        LoadingCart: query.isLoading,
        CartMutation: mutation,
    }
}

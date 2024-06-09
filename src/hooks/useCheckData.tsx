'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { IMovieCart } from './types'
import { http } from '@/service/http'
import { useMovieStore } from './stores/useMovieStore'
import stale from '@/utils/stale'

export default function useCartData(key?: string | string[] | undefined) {
    const { setMoviesInCart, showToast, moviesInCart } = useMovieStore()

    const query = useQuery<IMovieCart | undefined>(
        [['cartMovies'], key],
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
        (values: { key?: string; delete?: boolean } & IMovieCart) => {
            const { key, ...restValues } = values
            const existingEntries = query.data ? Object.entries(query.data) : []
            const existingEntry = existingEntries.find(
                ([_, item]) => item.id === values.id
            )

            if (restValues.delete) {
                return http.delete(`/frutas/checkout/${key}.json`)
            } else {
                if (existingEntry) {
                    const [entryKey, existingItem] = existingEntry
                    const updatedValues = {
                        ...restValues,
                        amount: existingItem.amount + 1,
                        total: (
                            parseFloat(existingItem.price) *
                            (existingItem.amount + 1)
                        ).toFixed(2),
                    }
                    return http.put(
                        `/frutas/checkout/${entryKey}.json`,
                        updatedValues
                    )
                } else {
                    const body = { ...restValues, amount: 1 }
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
        LoadingCart: query.isLoading || mutation.isLoading,
        CartMutation: mutation,
    }
}

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
                .then((res) => {
                    return res?.data || {}
                })
                .catch((error) => console.log(error)),
        {
            staleTime: stale.never,
            cacheTime: 0,
            enabled: true,
        }
    )

    const mutation = useMutation(
        (values: IMovieCart) => {
            const filtered =
                query.data && Object.values(query.data).filter((item) => item)

            const existingItemKey = Object.keys(query.data || {}).find(
                (key) => key
            )

            if (!values.delete) {
                if (!existingItemKey) {
                    console.log('POST')
                    const body = { ...values, amount: 1 }
                    return http.post(`/frutas/checkout.json`, body)
                } else {
                    console.log('PUT')
                    const updatedValues = {
                        ...values,
                        amount: filtered?.[0]?.amount + 1,
                        total: filtered?.[0]?.ttoal * filtered?.[0]?.amount,
                    }
                    return http.put(
                        `/frutas/checkout/${existingItemKey}.json`,
                        updatedValues
                    )
                }
            } else {
                console.log('DELETE')
                return http.delete(`/frutas/checkout/${id}.json`)
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

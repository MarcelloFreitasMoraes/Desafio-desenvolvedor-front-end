'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { IMovieCart } from './types'
import { http } from '@/config/http'
import stale from '@/utils/stale'
import { useState } from 'react'

export default function useCartData() {
    const [open, setOpen] = useState<boolean>(false)
    const query = useQuery<IMovieCart | undefined>(
        [['cartMovies']],
        () =>
            http
                .get('/frutas/checkout.json')
                .then((res) => {
                    return res?.data || {}
                })
                .catch((error) => {
                    setOpen(false)
                    console.log(error)
                }),
        {
            staleTime: stale.never,
            cacheTime: 0,
            enabled: true,
        }
    )
    const mutation = useMutation(
        async (values: { key?: string; delete?: boolean } & IMovieCart) => {
            const { key, decrement, ...restValues } = values
            const existingEntries = query.data ? Object.entries(query.data) : []
            const existingEntry = existingEntries.find(
                ([_, item]) => item.id === values.id
            )

            if (restValues.delete) {
                return http.delete(`/frutas/checkout/${key}.json`)
            } else {
                if (existingEntry) {
                    const [entryKey, existingItem] = existingEntry
                    const currentAmount = existingItem?.amount
                    const newAmount = decrement
                        ? currentAmount - 1
                        : currentAmount + 1

                    if (newAmount === 0) {
                        return http.delete(`/frutas/checkout/${entryKey}.json`)
                    }
                    const updatedValues = {
                        ...restValues,
                        amount: newAmount,
                        total: (
                            parseFloat(existingItem.price) * newAmount
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
                setOpen(true)
            },
            onError: () => {
                setOpen(false)
            },
        }
    )
    const handleDeleteAll = async () => {
        const existingEntries = query.data ? Object.entries(query.data) : []
        const itemKeys = existingEntries.map(([key]) => key)

        try {
            await Promise.all(
                itemKeys.map((key) =>
                    http.delete(`/frutas/checkout/${key}.json`)
                )
            )
            query.refetch()
        } catch (error) {
            console.error(error)
        }
    }

    return {
        CartQuery: query,
        LoadingCart: query.isLoading || mutation.isLoading,
        CartMutation: mutation,
        ModalOpen: open,
        SetOpen: setOpen,
        DeleteAll: handleDeleteAll,
    }
}
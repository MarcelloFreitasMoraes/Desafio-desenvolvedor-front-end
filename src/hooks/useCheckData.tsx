'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { IMovieCart } from './types'
import { useState } from 'react'
import { CartService } from '@/service/useServiceData'

const cartService = new CartService()

export default function useCartData() {
    const [open, setOpen] = useState<boolean>(false)
    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery<IMovieCart>({
        queryKey: ['cartMovies'],
        queryFn: cartService.fetchAllCartMovies,
    })

    const mutation = useMutation(
        async (values: { key?: string; delete?: boolean } & IMovieCart) => {
            const { key, decrement = false, ...restValues } = values
            const existingEntries = products ? Object.entries(products) : []
            const existingEntry = existingEntries.find(
                ([_, item]) => item.id === values.id
            )

            const operations = {
                delete: () => cartService.removeMovieFromCart(key!),
                update: () =>
                    existingEntry
                        ? cartService.updateMovieInCart(
                              existingEntry[0],
                              existingEntry[1],
                              restValues,
                              decrement
                          )
                        : Promise.reject(new Error('Entry not found')),
                create: () => cartService.addMovieToCart(restValues),
            }

            return restValues.delete
                ? operations.delete()
                : existingEntry
                ? operations.update()
                : operations.create()
        },
        {
            onSuccess: () => {
                refetch()
                setOpen(true)
            },
            onError: () => {
                setOpen(false)
            },
        }
    )

    const deleteAll = async () => {
        if (products) {
            await cartService.finalizePurchase(products, refetch)
        }
    }

    return {
        CartQuery: products,
        LoadingCart: isLoading || mutation.isLoading,
        CartMutation: mutation,
        ModalOpen: open,
        SetOpen: setOpen,
        DeleteAll: deleteAll,
    }
}

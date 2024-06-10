import { http } from '@/config/http'
import { IMovieCart } from '@/hooks/types'

export class CartService {
    async fetchList() {
        const { data } = await http.get('/frutas/list.json')
        return data
    }

    async fetchAllCartMovies() {
        const { data } = await http.get('/frutas/checkout.json')
        return data
    }

    async addMovieToCart(restValues: IMovieCart) {
        const body = { ...restValues, amount: 1 }
        const { data } = await http.post(`/frutas/checkout.json`, body)
        return data
    }

    async updateMovieInCart(
        entryKey: string,
        existingItem: { amount: number; price: string },
        restValues: IMovieCart,
        decrement: boolean
    ) {
        const currentAmount = existingItem?.amount
        const newAmount = decrement ? currentAmount - 1 : currentAmount + 1

        if (newAmount === 0) {
            return this.removeMovieFromCart(entryKey)
        }
        const updatedValues = {
            ...restValues,
            amount: newAmount,
            total: (parseFloat(existingItem.price) * newAmount).toFixed(2),
        }

        const { data } = await http.put(
            `/frutas/checkout/${entryKey}.json`,
            updatedValues
        )
        return data
    }

    async removeMovieFromCart(key: string) {
        const { data } = await http.delete(`/frutas/checkout/${key}.json`)
        return data
    }

    async finalizePurchase(products: IMovieCart, refetch: () => void) {
        const existingEntries = products ? Object.entries(products) : []
        const itemKeys = existingEntries.map(([key]) => key)

        try {
            await Promise.all(
                itemKeys.map((key) =>
                    http.delete(`/frutas/checkout/${key}.json`)
                )
            )
            refetch()
        } catch (error) {
            console.error(error)
        }
    }
}

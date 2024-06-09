import { IMovieCart } from '@/hooks/types'
import { http } from './http'

export const fetchList = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const { data } = await http.get('/frutas/list.json')
    return data
}

export const fetchProducts = async () => {
    const { data } = await http.get('/frutas/checkout.json')
    return data
}

export class CartService {
    async fetchProducts() {
        const { data } = await http.get('/frutas/checkout.json')
        return data
    }

    async addMovieToCart(movieDetails: IMovieCart) {
        const { data } = await http.post('/frutas/checkout.json/', movieDetails)
        return data
    }

    async updateMovieInCart(movieDetails: IMovieCart) {
        const { id, ...updateData } = movieDetails
        const { data } = await http.put(
            `/frutas/checkout.json/${id}`,
            updateData
        )
        return data
    }

    async removeMovieFromCart(id: string) {
        const { data } = await http.delete(`/frutas/checkout.json/${id}`)
        return data
    }

    async finalizePurchase() {
        const { data: moviesInCart } = await http.get('/frutas/checkout.json')

        for (const item of moviesInCart) {
            await http.delete(`/frutas/checkout.json/${item.id}`)
            await new Promise((resolve) => setTimeout(resolve, 100))
        }

        return moviesInCart
    }
}

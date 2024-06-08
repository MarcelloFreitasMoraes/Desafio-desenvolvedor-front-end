import { API, CHECK } from './http'

export const fetchList = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(API, {
        next: {
            tags: ['get-list'],
        },
    })

    if (!response.ok) {
        throw new Error('Failed to fetch products')
    }

    return response.json()
}
export const fetchProducts = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch(CHECK, {
        next: {
            tags: ['get-products'],
        },
    })

    if (!response.ok) {
        throw new Error('Failed to fetch products')
    }

    return response.json()
}

export const fetchCheckoutProducts = async (
    id?: string | string[] | undefined
) => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch('http://localhost:3333/checkout', {
        next: {
            tags: ['get-checkout'],
        },
    })

    if (!response.ok) {
        throw new Error('Failed to fetch checkout products')
    }

    return response.json()
}

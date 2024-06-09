import { http } from './http'

export const fetchList = async () => {
    const { data } = await http.get('/frutas/list.json')
    return data
}

export const fetchProducts = async () => {
    const { data } = await http.get('/frutas/checkout.json')
    return data
}

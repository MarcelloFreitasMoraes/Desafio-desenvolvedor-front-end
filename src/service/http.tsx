import axios from 'axios'

export const API = `${process.env.NEXT_PUBLIC_API_URL}/frutas/list.json`

export const CHECK = `${process.env.NEXT_PUBLIC_API_URL}/frutas/checkout.json`

export const CHECKOUT = `${process.env.NEXT_PUBLIC_API_URL}/frutas/checkout`

export const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

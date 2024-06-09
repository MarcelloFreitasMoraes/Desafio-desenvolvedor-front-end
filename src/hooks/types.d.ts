export interface ListData {
    description: string
    image: string
    name: string
    price: string
    id: number
    delete?: boolean
}

export interface IMovieCart extends ListData {
    amount?: number
    total?: string
}

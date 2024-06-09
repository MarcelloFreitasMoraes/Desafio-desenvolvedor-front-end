export interface ListData {
    description?: string
    image?: string
    name?: string
    price?: number
    id?: number
    delete?: boolean
}

export interface IMovieCart extends ListData {
    amount?: number
    total?: number
}

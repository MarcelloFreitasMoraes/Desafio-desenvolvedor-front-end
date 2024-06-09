interface IToastInfo {
    isVisible: boolean
    message: string
    duration: number
    color: 'success' | 'error'
}

interface IToastActions {
    showToast: (message: string, duration?: number, color?: 'success' | 'error') => void
    hideToast: () => void
}

export interface IMovieStoreState {
    movies: IMovie[]
    searchTerm: string
    toastInfo: IToastInfo
    moviesInCart: ICartItem[]
    totalAmountDue: number
}

export interface IMovieStoreActions {
    setMovies: (movies: IMovie[]) => void
    setMoviesInCart: (moviesInCart: ICartItem[]) => void
    calculateSubtotal: (item: ICartItem) => number
    setSearchTerm: (searchTerm: string) => void
    showToast: IToastActions['showToast']
    hideToast: IToastActions['hideToast']
}

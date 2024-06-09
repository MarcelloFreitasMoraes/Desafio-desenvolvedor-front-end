import * as zustand from 'zustand'
import { IMovieStoreActions, IMovieStoreState } from './useMoviesStore.types'

export const useMovieStore = zustand.create<
    IMovieStoreState & IMovieStoreActions
>((set) => ({
    movies: [],
    moviesInCart: [],
    totalAmountDue: 0,
    searchTerm: '',
    toastInfo: {
        message: '',
        duration: 5000,
        isVisible: false,
        color: 'success',
    },

    setMovies: (movies) => set(() => ({ movies })),
    setSearchTerm: (item) => set({ searchTerm: item }),
    setMoviesInCart: (moviesInCart) => {
        const total = moviesInCart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        )
        set({ moviesInCart, totalAmountDue: total })
    },
    calculateSubtotal: (item) => {
        return item?.price * item?.quantity
    },
    showToast: (message, duration = 5000, color = 'success') =>
        set({ toastInfo: { isVisible: true, message, duration, color } }),
    hideToast: () =>
        set((state) => ({
            toastInfo: { ...state.toastInfo, isVisible: false },
        })),
}))

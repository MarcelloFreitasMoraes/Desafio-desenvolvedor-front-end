export interface ModalProps<T = any> {
    showModal: boolean
    isLogged: string | null | undefined
    closeModal: () => void
}

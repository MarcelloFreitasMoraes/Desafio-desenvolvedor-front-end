'use client'
import React, { useEffect, useState } from 'react'
import { AlertContainer, CheckItem, CheckItemError } from './styles'
import theme from '@/styles/theme/theme'

type AlertProps = {
    type: 'success' | 'error'
    message: string
}

const ModalLogin: React.FC<AlertProps> = ({ type, message }) => {
    const [showAlert, setShowAlert] = useState<boolean>(true)

    const alertColor =
        type === 'success' ? theme.colors.sucess : theme.colors.error

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false)
        }, 5000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        showAlert && (
            <AlertContainer background={alertColor}>
                {type === 'success' ? <CheckItem /> : <CheckItemError />}
                <p>{message}</p>
            </AlertContainer>
        )
    )
}

export default ModalLogin

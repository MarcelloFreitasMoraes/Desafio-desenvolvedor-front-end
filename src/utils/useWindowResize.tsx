import { useState, useEffect } from 'react'

export const useWindowResize = (): boolean => {
    const [showArrows, setShowArrows] = useState<boolean>(true)

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth
            setShowArrows(screenWidth > 767)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return showArrows
}

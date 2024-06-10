'use client'

import React from 'react'
import { Box, Spinner } from './Loading.styled'

const Loading: React.FC<{ size?: number }> = ({ size = 75 }) => {
    return (
        <Box>
            <Spinner size={size} />
        </Box>
    )
}

export default Loading

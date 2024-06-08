'use client'

import React from 'react'
import { Box, Spinner } from './Loading.styled'

const Loading: React.FC = () => {
    return (
        <Box>
            <Spinner />
        </Box>
    )
}

export default Loading

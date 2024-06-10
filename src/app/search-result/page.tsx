'use client'

import React from 'react'
import { Container } from '@/components'
import SearchClient from '../components/SearchClient/SearchClient'
interface Params {
    searchParams: { fruta: string }
}

const SearchResult: React.FC<Params> = (searchParams) => {
    return (
        <Container>
            <SearchClient fruta={searchParams?.searchParams?.fruta} />
        </Container>
    )
}

export default SearchResult

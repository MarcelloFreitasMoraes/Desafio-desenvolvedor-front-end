'use client'

import { FaSearch } from 'react-icons/fa'
import { SearchProps } from './types'
import { Form, Icon, Wrapper } from './Search.styles'

const Search: React.FC<SearchProps> = ({ setSearch, search, resultSearch }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    return (
        <Wrapper>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                    resultSearch()
                }}
            >
                <input
                    type="text"
                    placeholder="Pesquise sua fruta preferida..."
                    onChange={handleInputChange}
                    value={search}
                />
                <Icon type="submit">
                    <FaSearch />
                </Icon>
            </Form>
        </Wrapper>
    )
}

export default Search

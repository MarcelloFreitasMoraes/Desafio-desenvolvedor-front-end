'use client'

import { FaSearch } from 'react-icons/fa'
import { SearchProps } from './types'
import { Form, Icon, Wrapper } from './Search.styles'
import { useRouter } from 'next/navigation'

const Search: React.FC<SearchProps> = ({ setSearch, search }) => {
    const { push } = useRouter()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    const resultSearch = () => {
        if (search.trim() !== '') {
            push(`search-result?fruta=${search}`)
        }
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
                    onKeyUp={handleKeyUp}
                />
                <Icon type="submit">
                    <FaSearch />
                </Icon>
            </Form>
        </Wrapper>
    )
}

export default Search

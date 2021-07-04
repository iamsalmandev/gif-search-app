import { useState } from 'react'
import { SearchHeader, SearchHeaderProps } from './SearchHeader'
import { SearchResults } from './SearchResults'
import { useTrendingGifySearch } from '~/hooks'

export const Search = () => {
    const [text, setText] = useState<SearchHeaderProps['text']>('');
    const [order, setOrder] = useState<SearchHeaderProps['order']>('ASC');
    const { loading, data, loadMore } = useTrendingGifySearch({ query: text })
    console.log("loading", loading)
    return <>
        <SearchHeader setText={setText} text={text} order={order} setOrder={setOrder} />
        <SearchResults onScrollEnd={loadMore} loading={loading} data={data} />
    </>
}
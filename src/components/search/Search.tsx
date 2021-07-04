import { useState } from 'react'
import { SearchHeader, SearchHeaderProps } from './SearchHeader'
import { SearchResults } from './SearchResults'
import { useTrendingGifySearch } from '~/hooks'
import { NoQueryView } from './NoQueryView'
export const Search = () => {
    const [text, setText] = useState<SearchHeaderProps['text']>('');
    const [order, setOrder] = useState<SearchHeaderProps['order']>('ASC');
    const { loading, data, loadMore } = useTrendingGifySearch({ query: text })
    return <>
        <SearchHeader setText={setText} text={text} order={order} setOrder={setOrder} />
        {!data.length && <NoQueryView />}
        <SearchResults onScrollEnd={loadMore} loading={loading} data={data} />
    </>
}
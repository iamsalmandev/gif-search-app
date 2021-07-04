
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import debounce from 'lodash/debounce'
const URL = `${process.env.REACT_APP_GIF_API_URL}search?api_key=${process.env.REACT_APP_GIF_SEARCH_API_KEY}`
interface Props {
    query?: string;
    limit?: number
}
export const useTrendingGifySearch = ({ query = "", limit = 25 }: Props) => {
    const [loading, setLoading] = useState(false)
    const [offset, setOffset] = useState<number>(0)
    const [data, setData] = useState<any[]>([])

    const URL_ = `${URL}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=en`

    const fetchGifs = useCallback(debounce(async (url) => {
        if (loading) return;
        setLoading(true)
        await axios.get(url).then(res => {
            setData((data) => [...data, ...res?.data?.data])
        }).catch((e) => console.log(e))
        setLoading(false)
    }, 500), [])


    useEffect(() => {
        (() => {
            fetchGifs(URL_)
        })()
    }, [URL_, fetchGifs])

    useEffect(() => {
        setData([])
        setOffset(0)
    }, [query])


    const loadMore = () => setOffset((offset) => offset + limit)

    return { loading, data, loadMore }

}
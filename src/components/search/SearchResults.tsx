import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GifCard } from '~/components'
import { useScrollToBottom } from '~/hooks'
interface Props {
    loading: boolean;
    data: any[]
    onScrollEnd: () => void
}
export const SearchResults: React.FC<Props> = ({ loading, data, onScrollEnd }) => {

    useScrollToBottom(() => !loading && onScrollEnd())

    return <Container maxWidth="lg" style={{ minHeight: "500px" }}>
        <Box my={4} display="flex" justifyContent="center" flexWrap="wrap"  >
            {data.map(item => <Box key={item.id} m="4px"><GifCard item={item} /></Box>)}

        </Box>
        <Box minHeight="50px" py={2} display="flex" justifyContent="center">
            {loading && <CircularProgress />}
        </Box>
    </Container>
}
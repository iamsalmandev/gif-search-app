import Box from "@material-ui/core/Box"
import { LazyLoadWrapper } from '~/components'

interface Props {
    item: any;
}
export const GifCardDimension = { height: "320px", width: "280px" }

export const GifCard: React.FC<Props> = ({ item }) => {


    return <Box position="relative" display="flex" borderRadius="4px" boxShadow="0 0 2px lightgrey" {...GifCardDimension}>
        <LazyLoadWrapper>
            {({ onLoad }) => <img onLoad={onLoad} height="100%" width="100%" src={item?.images?.fixed_height_small?.webp} alt="loading..." />}
        </LazyLoadWrapper>
    </Box>
}
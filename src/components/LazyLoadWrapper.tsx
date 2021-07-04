import Box from "@material-ui/core/Box"
import CircularProgress from "@material-ui/core/CircularProgress"
import { useState } from "react"
interface Props {
    dimension?: {
        height: string;
        width: string
    }
    children(s: { onLoad: () => void }): React.ReactNode;
}
export const LazyLoadWrapper: React.FC<Props> = ({ dimension = { height: '100%', width: '100%' }, children }) => {
    const [imgLoading, setImgLoading] = useState(true);


    return <Box position="relative" display="flex" borderRadius="4px" boxShadow="0 0 2px lightgrey" {...dimension}>
        {imgLoading && <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            {...dimension}
            position="absolute"
            top="0"
            left="0" >
            <CircularProgress />
        </Box>}
        {children({ onLoad: () => setImgLoading(false) })}
    </Box>
}
import Box from "@material-ui/core/Box"
import { HEADER_HEIGHT, HEADER_ZINDEX } from '~/constants'
export const Header = () => {
    return <Box bgcolor="white" zIndex={HEADER_ZINDEX} boxShadow="0 0 2px lightgrey" top={0} position="fixed" width="100%" height={`${HEADER_HEIGHT}px`}>
        <Box component="h2" height="100%" width="fit-content" margin="0 10px" display="flex" alignItems="center" >
            Front-End Challenge
        </Box>
    </Box>
}
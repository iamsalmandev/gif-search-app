import Box from '@material-ui/core/Box'
import Container from "@material-ui/core/Container"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton"
import Search from '@material-ui/icons/Search';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

export interface SearchHeaderProps {
    order: 'ASC' | 'DESC'
    text: string
    setOrder: (val: SearchHeaderProps['order']) => void
    setText: (val: SearchHeaderProps['text']) => void
}
export const SearchHeader: React.FC<SearchHeaderProps> = ({ order, text, setText, setOrder }) => {
    return <Container maxWidth="lg">
        <Box p="40px 8px" display="flex" flexDirection="column" alignItems="center">
            <Box m="16px 0 40px" component="h3" lineHeight="1.5">Trending GiFs</Box>
            <Input
                disableUnderline
                fullWidth
                value={text}
                onChange={({ target: { value } }) => setText(value)}
                placeholder="search"
                style={{ borderRadius: '4px', padding: "2px 5px", border: "1px solid lightgray" }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="search"
                            onMouseDown={() => undefined}
                        >
                            <Search />
                        </IconButton>
                    </InputAdornment>
                } />
            <Box my={2} display="flex" alignItems="center">
                <FormLabel component="legend">Order By: </FormLabel>
                <RadioGroup
                    style={{ marginLeft: "10px" }}
                    row
                    aria-label="Order"
                    value={order}
                    onChange={
                        ({ target: { value } }) => {
                            if (value === 'ASC' || value === 'DESC') setOrder(value)
                        }}>
                    <FormControlLabel value="ASC" control={<Radio />} label="ASC" />
                    <FormControlLabel value="DESC" control={<Radio />} label="DESC" />

                </RadioGroup>
            </Box>
        </Box>

    </Container >
}
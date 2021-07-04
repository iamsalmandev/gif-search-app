import Box from "@material-ui/core/Box"
import { Header, Search, Footer } from '~/components'
import { HEADER_HEIGHT } from '~/constants'

const App: React.FC<{}> = () => {
  return (
    <div >
      <Header />
      <Box marginTop={`${HEADER_HEIGHT}px`}>
        <Search />
        <Footer />
      </Box>
    </div>
  );
}

export default App;

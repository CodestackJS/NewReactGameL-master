import { Grid, Show, GridItem, Box, HStack } from "@chakra-ui/react"
import GameGrid from "../componets/GameGrid"
import GameHeading from "../componets/GameHeading"
import GenreList from "../componets/GenreList"
import PlatformSelector from "../componets/PlatformSelector"
import SortSelector from "../componets/SortSelector"


const HomePage = () => {
  return (
    <>
    <Grid
      templateAreas={{
        base: `'main'`,
        lg: `'aside main'`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px",
      }}
    >
      
      <Show above="lg">
        <GridItem area="aside" paddingX={1}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
    
    
    </>
  )
}

export default HomePage
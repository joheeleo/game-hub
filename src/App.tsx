import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./myComponents/NavBar"
import GameGrid from "./myComponents/GameGrid"



const App = () => {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>
        <NavBar/>
      </GridItem>
      
      {/* <Show when={['(min-width: 1200px)']}>
      </Show> */}
        <GridItem area='aside' >Aside</GridItem>
        <GridItem area='main' >
          <GameGrid />
        </GridItem>
    </Grid>
  )
}

export default App  
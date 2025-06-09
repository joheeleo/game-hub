import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./myComponents/NavBar"
import GameGrid from "./myComponents/GameGrid"
import GenreList from "./myComponents/GenreList"
import { useState } from "react"
import type { Genre } from "./myComponents/hooks/UseGenres"


 
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
    >
      <GridItem area='nav'>
        <NavBar/>
      </GridItem>
      
      {/* <Show when={['(min-width: 1200px)']}>
      </Show> */}
        <GridItem area='aside' padding={5} >
          <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
        <GridItem area='main' >
          <GameGrid selectedGenre={ selectedGenre }/>
        </GridItem>
    </Grid>
  )
}

export default App  
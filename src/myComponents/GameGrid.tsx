import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "./hooks/UseGenres";

interface Props {
  selectedGenre: Genre | null
}

const GameGrid = ({selectedGenre}: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spaceX={3}
        spaceY={3}
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />

          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

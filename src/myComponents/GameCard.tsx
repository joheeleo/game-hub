import { Card, Heading, Image } from "@chakra-ui/react";
import type { Game } from "./hooks/UseGames";

interface Props {
  game: Game;
  
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={'hidden'}>
      <Card.Body>
        <Image src={game.background_image}/>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCard;

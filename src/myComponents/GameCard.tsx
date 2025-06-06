import { Card, Heading, Image } from "@chakra-ui/react";
import type { Game } from "./hooks/UseGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game
  
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={'hidden'}>
      <Card.Body> 
        <Image src={game.background_image}/>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCard;

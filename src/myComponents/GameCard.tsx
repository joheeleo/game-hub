import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import type { Game } from "./hooks/UseGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game
  
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root >
      <Card.Title>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        
      </Card.Title>
      <Card.Body> 
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        <CriticScore score={game.metacritic} />

        </HStack>
      </Card.Body>
      
    </Card.Root>
  );
};

export default GameCard;

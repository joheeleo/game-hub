import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "./hooks/UseGenres";
import getCroppedImageUrl from "@/services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item listStyle={"none"} key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

import { Button, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenres, { type Genre } from "./hooks/UseGenres";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
    onSelectedGenre: (genre: Genre) => void
    selectedGenre: Genre | null 
}

const GenreList = ({selectedGenre, onSelectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error)  return null

  if (isLoading) return <Spinner />
  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item listStyle={"none"} key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize='lg' variant={'ghost'}>{genre.name}</Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

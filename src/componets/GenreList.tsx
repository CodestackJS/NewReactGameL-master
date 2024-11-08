import useGenres, { Genre } from "../hooks/useGenres";

import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";



const GenreList = () => {
  const { data, error } = useGenres();

  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);

  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

  return (
    <>
    <Heading fontSize='2xl'>Genres</Heading>
    <List>
     
     
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit='cover'
              src={getCroppedImageUrl(genre.image_background)}
              ></Image>
            <Button
              fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
              color={genre.id === selectedGenreId ? "blue.500" : "normal"}
              onClick={() => setSelectedGenreId(genre.id)}
              fontSize="100%"
              variant="link"
              >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
      </>
  );
};

export default GenreList;
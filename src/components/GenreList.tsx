import useGenres, { type Genres } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize="36px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Button onClick={() => onSelectGenre(genre)} fontSize="lg" variant="ghost" p={0}>
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;

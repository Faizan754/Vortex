import type { Games } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10}>
      <Card.Header>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
      </Card.Header>
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCard;

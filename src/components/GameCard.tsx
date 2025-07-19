import type { Games } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10}>
      <Card.Header>
        <Image src={game.background_image}></Image>
      </Card.Header>
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCard;

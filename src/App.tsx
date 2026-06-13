import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { type Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}

function App() {
  const isLarge = useBreakpointValue({ base: false, lg: true });
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show when={isLarge}>
        <GridItem area="aside" paddingX="5px">
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
            selectedGenre={GameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          onSelectPlatform={(platform) =>
            setGameQuery({ ...GameQuery, platform })
          }
          selectedPlatform={GameQuery.platform}
        />
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

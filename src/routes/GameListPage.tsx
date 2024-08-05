import { useState } from "react";
import { GameQuery, Genre, Platform } from "../models/games";
import GameGrid from "../components/games/GameGrid";
import GameSortSelector from "../components/games/GameSortSelector";
import InputSearch from "../components/utilities/InputSearch";
import GamePlatformSelector from "../components/games/GamePlatformSelector";
import GameGenreSelector from "../components/games/GameGenreSelector";
import { useTranslation } from "../context/TranslationProvider";

const GameListPage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { translate } = useTranslation();
  return (
    <>
      <div className="row border-bottom py-3">
        <div className="col-md-6 col-xl-3 mb-2">
          <GamePlatformSelector
            onSelectPlatform={(platform: Platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
        </div>
        <div className="col-md-6 col-xl-3 mb-2">
          <GameGenreSelector
            onSelectGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
          />
        </div>
        <div className="col-md-6 col-xl-3 mb-2">
          <GameSortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </div>
        <div className="col-md-6 col-xl-3 mb-2">
          <InputSearch
            placeHolder={translate(
              "page.game_library.search_input.placeholder"
            )}
            onChange={(searchText) => {
              setGameQuery({ ...gameQuery, searchText });
            }}
          />
        </div>
      </div>
      <GameGrid gameQuery={gameQuery} />
    </>
  );
};

export default GameListPage;

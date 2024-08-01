import { useState } from "react";
import { GameQuery } from "../../models/games";
import GameGrid from "./GameGrid";
import GameSortSelector from "./GameSortSelector";
import InputSearch from "../utilities/InputSearch";

const GameList = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <div className="row border-bottom py-3 mb-3">
        <div className="col-auto">TODO: GameFilter</div>
        <div className="col-auto">
          <GameSortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </div>
        <div className="col-auto">
          <InputSearch
            placeHolder="Search Games"
            onChange={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </div>
      </div>
      <GameGrid gameQuery={gameQuery} />
    </>
  );
};

export default GameList;

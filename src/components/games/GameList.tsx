import { useState } from "react";
import { GameQuery } from "../../models/games";
import GameGrid from "./GameGrid";

const GameList = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <div className="row border-bottom py-3">
        <div className="col-auto">TODO: GameFilter</div>
        <div className="col-auto">TODO: GameSorter</div>
        <div className="col-auto">TODO: Input searchfield</div>
      </div>
      <GameGrid gameQuery={gameQuery} />
    </>
  );
};

export default GameList;

import useGames, { useGamesStatic } from "../../hooks/useGames";
import { GameQuery } from "../../models/games";
import Alert from "../utilities/Alert";
import GameCard from "./GameCard";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGamesStatic(gameQuery);

  if (error) {
    return <Alert color="danger">There was an error fething the games!</Alert>;
  }

  return (
    <div className="row mt-2">
      {data.map((game) => (
        <div key={game.id} className="col-md-6 col-xl-4 col-xxl-3">
          <GameCard game={game} />
        </div>
      ))}
    </div>
  );
};

export default GameGrid;

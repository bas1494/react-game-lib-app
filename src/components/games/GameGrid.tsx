import useGames, { useGamesStatic } from "../../hooks/useGames";
import { GameQuery } from "../../models/games";
import getAmountOfApproxVisibleItems from "../../services/skeleton-item-calculator";
import Alert from "../utilities/Alert";
import GameCard from "./GameCard";
import GameSkeletonCard from "./GameSkeletonCard";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletonItems: number[] = new Array(getAmountOfApproxVisibleItems())
    .fill(1)
    .map((_, index) => index);

  if (error) {
    return <Alert color="danger">There was an error fething the games!</Alert>;
  }

  return (
    <div className="row">
      {isLoading &&
        skeletonItems.map((skeletonItem) => (
          <div key={skeletonItem} className="col-md-6 col-xl-4 col-xxl-3">
            <GameSkeletonCard />
          </div>
        ))}

      {data.map((game) => (
        <div key={game.id} className="col-md-6 col-xl-4 col-xxl-3">
          <GameCard game={game} />
        </div>
      ))}
    </div>
  );
};

export default GameGrid;

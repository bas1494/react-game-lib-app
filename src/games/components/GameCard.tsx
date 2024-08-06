import { Link } from "react-router-dom";
import { Game } from "../models/gameModels";
import { getCroppedImageUrl } from "../../services/utility-service";
import GamePlatformIconList from "./GamePlatformIconList";
import GameRating from "./GameRating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="card game-card">
      <Link to={`games/${game.id}`}>
        <img
          src={getCroppedImageUrl(game.background_image)}
          className="card-img-top"
          alt={game.background_image}
        ></img>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-9">
              <GamePlatformIconList
                platforms={game.parent_platforms?.map((p) => p.platform)}
              />
            </div>
            <div className="col-3 text-end">
              <GameRating rating={game.metacritic} />
            </div>
          </div>
          <h5 className="card-title text-truncate">{game.name}</h5>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;

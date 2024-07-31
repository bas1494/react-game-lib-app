import { Game } from "../models/games";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="card">
      <img
        src={getCroppedImageUrl(game.background_image)}
        className="card-img-top"
        alt={game.background_image}
      ></img>
      <div className="card-body">
        <h5 className="card-title text-truncate">{game.name}</h5>
        <p>Rating</p>
        <p>Rating</p>
      </div>
    </div>
  );
};

export default GameCard;

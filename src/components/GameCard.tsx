import { Game } from "../models/games";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
      </div>
    </div>
  );
};

export default GameCard;

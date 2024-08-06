interface Props {
  rating: number;
}

const GameRating = ({ rating }: Props) => {
  const color: string =
    rating > 75 ? "success" : rating > 50 ? "warning" : "danger";

  return (
    <h6>
      <span className={"badge text-bg-" + color}>{rating}</span>
    </h6>
  );
};

export default GameRating;

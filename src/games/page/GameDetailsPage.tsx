import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const params = useParams();
  console.log(params.id);
  return <div className="row"></div>;
};

export default GameDetailsPage;

import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [clicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!clicked);
    onClick();
  };

  if (clicked)
    return <AiFillHeart color="#ff6b81" size={20} onClick={handleClick} />;
  return <AiOutlineHeart size={20} onClick={handleClick} />;
};

export default Like;

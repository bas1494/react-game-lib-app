import { MouseEvent, ReactNode } from "react";
import { BtnTypes } from "../types/literals";

interface Props {
  children: ReactNode;
  btnClick: (event: MouseEvent) => void;
  type?: BtnTypes;
  outLined?: boolean;
}

const Button = ({
  children,
  btnClick,
  type = "primary",
  outLined = false,
}: Props) => {
  const getClassNames = () => {
    return "btn btn-" + (outLined ? "outline-" + type : type);
  };

  return (
    <button
      type="button"
      className={getClassNames()}
      onClick={(event) => btnClick(event)}
    >
      {children}
    </button>
  );
};

export default Button;

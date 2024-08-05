import { MouseEvent, ReactNode } from "react";
import { BtnTypes } from "../../types/literals";

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
  return (
    <button
      type="button"
      className={"btn btn-" + (outLined ? "outline-" + type : type)}
      onClick={(event) => btnClick(event)}
    >
      {children}
    </button>
  );
};

export default Button;

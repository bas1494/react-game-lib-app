import { ReactNode } from "react";
import { AlerColors } from "../../types/literals";

interface Props {
  children: ReactNode;
  color?: AlerColors;
  dismissable?: boolean;
  dissmissBtnClicked?: () => void;
}

const Alert = ({
  children,
  color = "primary",
  dismissable = false,
  dissmissBtnClicked = () => {},
}: Props) => {
  const getClassNames = () => {
    return (
      "alert alert-" +
      color +
      (dismissable ? " alert-dismissible fade show" : "")
    );
  };
  return (
    <div className={getClassNames()} role="alert">
      {children}
      {dismissable && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={() => dissmissBtnClicked()}
        ></button>
      )}
    </div>
  );
};

export default Alert;

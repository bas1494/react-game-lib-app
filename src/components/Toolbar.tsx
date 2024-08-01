import { useContext } from "react";
import { NavBarContext } from "../context/NavBarProvider";

const Toolbar = () => {
  const { toggleCollapse } = useContext(NavBarContext);

  return (
    <nav className="navbar navbar-expand px-1 border-bottom navbar-dark pt-3">
      <button
        className="btn mr-2"
        id="sidebar-toggle"
        type="button"
        onClick={toggleCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="pt-2">
        <h4>Games</h4>
      </div>
    </nav>
  );
};

export default Toolbar;

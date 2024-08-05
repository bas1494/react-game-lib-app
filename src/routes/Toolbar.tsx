import { useContext, useEffect, useState } from "react";
import { NavBarContext } from "../context/NavBarProvider";
import { useTranslation } from "../context/TranslationProvider";

const Toolbar = () => {
  const { toggleCollapse } = useContext(NavBarContext);
  const { translate } = useTranslation();

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
        <h4>{translate("")}</h4>
      </div>
    </nav>
  );
};

export default Toolbar;
import { useContext } from "react";
import { NavBarContext } from "../utilities/context/NavBarProvider";
import menuItems from "../utilities/data/menu";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../utilities/context/TranslationProvider";

const SideBar = () => {
  const { isCollapsed } = useContext(NavBarContext);
  const { translate } = useTranslation();

  return (
    <aside
      id="sidebar"
      className={`pt-4 ps-4 ${isCollapsed ? "collapsed" : ""}`}
    >
      <div className="h-100">
        <div className="sidebar-logo mb-3">
          <NavLink to={""}> Game Library </NavLink>
        </div>
        <ul className="sidebar-nav">
          {menuItems.map((menuItem) => (
            <li key={menuItem.name} className="sidebar-item">
              <NavLink
                to={menuItem.path}
                className={({ isActive }) =>
                  isActive ? "active sidebar-link" : "sidebar-link"
                }
              >
                <i className="pe-2 sidebar-link-icon">{<menuItem.icon />}</i>
                {translate(menuItem.name)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;

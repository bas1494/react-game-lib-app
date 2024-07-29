import { useContext } from "react";
import { NavBarContext } from "../context/NavBarProvider";
import { BsCollection } from "react-icons/bs";

const SideBar = () => {
  const { isCollapsed } = useContext(NavBarContext);

  return (
    <aside
      id="sidebar"
      className={`pt-4 ps-4 ${isCollapsed ? "collapsed" : ""}`}
    >
      <div className="h-100">
        <div className="sidebar-logo mb-3">
          <a href="#">Game Library</a>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              <i className="pe-2 sidebar-link-icon">
                <BsCollection />
              </i>
              Library
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;

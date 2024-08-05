import SideBar from "./SideBar";

import Toolbar from "./Toolbar";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";
import { NavBarProvider } from "../context/NavBarProvider";

function App() {
  return (
    <NavBarProvider>
      <div className="wrapper">
        <SideBar />
        <div className="main">
          <Toolbar />
          <main className="content px-2 py-2">
            <div className="container-fluid">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </NavBarProvider>
  );
}

export default App;

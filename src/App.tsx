import SideBar from "./components/SideBar";
import { NavBarProvider } from "./context/NavBarProvider";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";
import GameList from "./components/GameList";

function App() {
  return (
    <div className="wrapper">
      <NavBarProvider>
        <SideBar />
        <div className="main">
          <Toolbar />
          <main className="content px-2 py-2">
            <div className="container-fluid">
              <GameList />
            </div>
          </main>
          <Footer />
        </div>
      </NavBarProvider>
    </div>
  );
}

export default App;

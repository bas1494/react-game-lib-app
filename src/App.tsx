import SideBar from "./components/SideBar";
import { NavBarProvider } from "./context/NavBarProvider";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";
import GameList from "./components/games/GameList";
import { TranslationProvider } from "./context/TranslationProvider";

function App() {
  return (
    <div className="wrapper">
      <NavBarProvider>
        <TranslationProvider>
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
        </TranslationProvider>
      </NavBarProvider>
    </div>
  );
}

export default App;

import SideBar from "./components/SideBar";
import { NavBarProvider } from "./context/NavBarProvider";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <NavBarProvider>
        <SideBar />
        <div className="main">
          <Toolbar />
          <main className="content px-2 py-2">
            <div className="container-fluid">TODO: Library stuff here!</div>
          </main>
          <Footer />
        </div>
      </NavBarProvider>
    </div>
  );
}

export default App;

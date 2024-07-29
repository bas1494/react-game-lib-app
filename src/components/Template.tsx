import SideBar from "./SideBar";
import { NavBarProvider } from "../context/NavBarProvider";
import translationService from "../services/translation-service";
import { useEffect } from "react";
import httpService from "../services/http-service";
import Toolbar from "./Toolbar";
import Footer from "./Footer";

const Template = () => {
  // useEffect(() => {
  //   httpService.get("games").then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <div className="wrapper">
      <NavBarProvider>
        <SideBar />
        <div className="main">
          <Toolbar />
          <main className="content px-3 py-2">
            <div className="container-fluid">TODO: Library stuff here!</div>
          </main>
          <Footer />
        </div>
      </NavBarProvider>
    </div>
  );
};

export default Template;

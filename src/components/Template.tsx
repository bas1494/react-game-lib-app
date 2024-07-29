import NavBar from "./NavBar";
import translationService from "../services/translation-service";
import { useEffect } from "react";
import httpService from "../services/http-service";

const Template = () => {
  useEffect(() => {
    httpService.get("pokemon").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div className="container-fluid min-vh-100 max-vh-100">
      <div className="row">
        <div className="col-sm-auto bg-light sticky-top">
          <NavBar />
        </div>
        <div className="col-sm p-3 max-vh-100">
          {translationService.translateString("page.main.router.title")}
        </div>
      </div>
    </div>
  );
};

export default Template;

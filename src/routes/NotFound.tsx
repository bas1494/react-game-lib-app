import { useTranslation } from "../utilities/context/TranslationProvider";

const NotFound = () => {
  const { translate } = useTranslation();

  return (
    <div className="row">
      <div className="col-12">
        <h4>{translate("page.not_found.title")}</h4>
        <p>{translate("page.not_found.content")}</p>
      </div>
    </div>
  );
};

export default NotFound;

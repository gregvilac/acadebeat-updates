//styles
import "../styles/pages/HomePage.scss";

//assets

import NewHeader from "../components/NewHeader";

//packages
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className="home">
      <NewHeader />

      <div className="home__hero">
        <div className="home__hero-wrapper">
          <div className="home__hero-div-2">
            <div className="home__hero-title-div">
              <h1 className="home__hero-title">
                {t("Language learning you'll like.")}
              </h1>

              <h2 className="home__hero-title-support">
                {t("Content you'll care about.")}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

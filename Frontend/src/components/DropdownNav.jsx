import { useState, useRef, useEffect } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
//import styles
import "../styles/components/DropdownNav.scss";

const DropdownNav = ({ closeNav, navOpen }) => {
  const { t } = useTranslation(["common"]);
  const siteLanguage = useSelector((state) => state.siteLanguage);
  const mobileDropdown = useRef(null);

  //Handle Click away event
  const handleClickOutside = (event) => {
    event.stopPropagation();
    if (
      mobileDropdown.current &&
      !mobileDropdown.current.contains(event.target)
    ) {
      closeNav();
      console.log("clicked outside");
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleHideDropdown, true);
    document.body.addEventListener("click", handleClickOutside, true);

    return () => {
      document.body.removeEventListener("keydown", handleHideDropdown, true);
      document.body.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  };

  //Handle Update Direction
  const [directionClass, setDirectionClass] = useState(
    "header__mobile-dropdown"
  );
  useEffect(() => {
    siteLanguage === "ltr"
      ? setDirectionClass("header__mobile-dropdown")
      : setDirectionClass(
          "header__mobile-dropdown header__mobile-dropdown--rtl"
        );
  }, [siteLanguage]);

  return (
    navOpen && (
      <div
        role="menu"
        aria-labelledby="navButtonMobile navButtonTablet"
        ref={mobileDropdown}
        className={directionClass}
      >
        <div className="header__mobile-dropdown-title-div">
          <h2 className="header__mobile-dropdown-title">{t("greeting")}</h2>
        </div>

        <div className="header__mobile-dropdown-links-div">
          <h2 className="header__mobile-dropdown-lang-text">{t("welcome")}</h2>
          <Link
            tabIndex={0}
            to="/login"
            className="header__mobile-dropdown-button header__mobile-dropdown-button--login"
          >
            {t("login")}
          </Link>
          <Link to="/register" className="header__mobile-dropdown-button">
            {t("signup")}
          </Link>
        </div>
        <div className="header__mobile-dropdown-lang-switcher">
          <label className="header__mobile-dropdown-lang-text">
            {t("Navigation Language")}
            <LanguageSwitcher />
          </label>
        </div>
        <div className="header__mobile-dropdown-footer">
          <p>{t("Privacy Policy")}</p>
          <p>{t("Terms of Use")}</p>
          <p>{t("Acadebeat Pro")}</p>
          <p>{t("About Us")}</p>
          <p>{t("Contact")}</p>
        </div>
      </div>
    )
  );
};

export default DropdownNav;

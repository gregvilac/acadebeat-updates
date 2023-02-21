//import styles
import "../styles/components/NewHeader.scss";

//import assets
import logo from "../assets/images/acadebeat-logo.svg";
import searchIcon from "../assets/icons/search2.svg";
import userIcon from "../assets/icons/user.svg";
import boxIcon from "../assets/icons/box.svg";
import downArrow from "../assets/icons/arrow.svg";
import LanguageSwitcher from "../components/LanguageSwitcher";
import DropdownNav from "./DropdownNav";

//import libraries
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const NewHeader = () => {
  const isTeacher = useSelector((state) => state.isTeacher);
  const isStudent = useSelector((state) => state.isStudent);
  const siteLanguage = useSelector((state) => state.siteLanguage);
  const [navOpen, setNavOpen] = useState(false);
  const [directionClass, setDirectionClass] = useState("header");
  const { t } = useTranslation(["common"]);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    console.log("toggle runs");
  };
  const closeNav = () => {
    setNavOpen(!navOpen);
    console.log("closed");
  };

  useEffect(() => {
    siteLanguage === "ltr"
      ? setDirectionClass("header")
      : setDirectionClass("header header--rtl");
  }, [siteLanguage]);

  return (
    <header className={directionClass}>
      <div className="header__wrapper">
        {navOpen && <DropdownNav navOpen={navOpen} closeNav={closeNav} />}
        {/* Header Left */}

        <div className="header__left">
          <div className="header__logo-div">
            <Link className="header__home-link" to="/">
              <img className="header__logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header__left-extra-nav">
            <p>Our Method</p>
            <p>About Us</p>
          </div>
        </div>

        {/* Header Right */}

        <div className="header__right">
          {/* Mobile */}
          <div className="header__mobile-nav">
            <Link>
              <div className="header__search-button">
                <img className="header__search-icon" src={searchIcon} alt="" />
              </div>
            </Link>
            <button
              tabIndex={1}
              role="button"
              id="navButtonMobile"
              aria-haspopup="menu"
              aria-expanded={navOpen ? "true" : "false"}
              onClick={toggleNav}
              className={
                !navOpen
                  ? " header__user-nav-mobile"
                  : "header__user-nav-mobile header__user-nav-mobile--open"
              }
            >
              <img className="header__user-icon" src={userIcon} alt="" />
              <img
                className={
                  navOpen
                    ? "header__nav-arrow-mobile--up"
                    : "header__nav-arrow-mobile"
                }
                src={downArrow}
                alt=""
              />
            </button>
          </div>

          {/* Tablet */}
          <div className="header__tablet-nav">
            <div className="header__search-bar">
              <div className="header__search-bar-image-div">
                <img className="header__search-icon" src={searchIcon} alt="" />
              </div>
              <input
                placeholder={t("search")}
                className="header__search-input"
                type="search"
              />
            </div>
            <button
              role="button"
              tabIndex={1}
              id="navButtonTablet"
              aria-haspopup="menu"
              aria-expanded={navOpen ? "true" : "false"}
              onClick={toggleNav}
              className={
                !navOpen
                  ? "header__user-nav-tablet"
                  : "header__user-nav-tablet header__user-nav-tablet--open"
              }
            >
              <img className="header__user-icon" src={userIcon} alt="" />
              <h3 className="header__user-text">
                {!navOpen ? t("start") : t("good")}
              </h3>
              <img
                className={
                  !navOpen
                    ? "header__nav-arrow-tablet"
                    : "header__nav-arrow-tablet header__nav-arrow-tablet--up"
                }
                src={downArrow}
                alt=""
              />
            </button>
          </div>

          {/* End of Tablet */}
        </div>

        {/* End of Header Right */}
      </div>
    </header>
  );
};

export default NewHeader;

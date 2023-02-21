import { changeLTR, changeRTL } from "../store/actions";
import globeIcon from "../assets/icons/globe-2-outline.svg";
import { useDispatch } from "react-redux";
import "../styles/components/LanguageSwitcher.scss";
import { useTranslation } from "react-i18next";
const LanguageSwitcher = () => {
  const dispatch = useDispatch();

  const { i18n } = useTranslation();
  //-----------------Handle Language Switcher

  //   if (localStorage.getItem("i18nextLng")?.length > 2) {
  //     i18next.changeLanguage("en");
  //   }

  function handleLanguageChange(event) {
    i18n.changeLanguage(event.target.value);
    if (event.target.value === "ar") {
      dispatch(changeRTL());
    } else {
      dispatch(changeLTR());
    }
  }
  return (
    <div className="lang-switcher">
      <img className="lang-switcher__globe-icon" src={globeIcon} alt="" />
      <select
        className="lang-switcher__select"
        onChange={(event) => handleLanguageChange(event)}
        name="langSelector"
        id="langSelector"
        value={localStorage.getItem("i18nextLng")}
      >
        <option className="lang-switcher__option" value="en">
          English
        </option>
        <option className="lang-switcher__option" value="ar">
          اللغة العربية
        </option>
        <option className="lang-switcher__option" value="zh">
          中文
        </option>
        <option className="lang-switcher__option" value="vi">
          tiếng Việt
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;

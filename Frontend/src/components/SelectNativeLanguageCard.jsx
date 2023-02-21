//styles
import "../styles/components/SelectLanguageCard.scss";
//components

//assets
import japanPhoto from "../assets/images/japan.jpg";
import quoteIcon from "../assets/icons/quote.svg";
//libraries
import { useState, useEffect } from "react";

const SelectNativeLanguageCard = ({
  id,
  name,
  code,
  nativeQuote,
  handleNativeLangs,
  formData,
  burst,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  // const randomizeColours = () => {
  //   const colours = ["red", "green", "yellow", "blue", "purple", "orange"];

  //   for (let i = 0; i < colours.length; i++)
  //     return "card__burst card__burst--" + colours[i];
  // };

  useEffect(() => {
    if (formData.nativeLangs.includes(id)) {
      setIsSelected(true);
    }
  }, []);

  return (
    <>
      <li className={isSelected ? "card card--selected" : "card"}>
        {/* Postioned Absolute */}
        {/* <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="card__play-button"
        >
          <img className="card__volume-icon" src={volumeIcon} alt="" />
        </button> */}

        <input
          checked={isSelected}
          className="card__checkbox"
          type="checkbox"
          id={id}
          value={id}
          onChange={handleNativeLangs}
        />

        {/* Positioned in order */}
        <div className="card__top">
          {/* <div className="card__check-are">
            <img
              src={import.meta.env.VITE_CLOUDFRONT_DOMAIN + "/" + code + ".svg"}
              alt=""
            />
          </div> */}
          <div className={burst}></div>
        </div>
        <div
          className={
            isSelected ? "card__bottom card__bottom--selected" : "card__bottom"
          }
        >
          <img className="card__quote-icon" src={quoteIcon} alt="" />

          <h3 className="card__quote">{nativeQuote}</h3>
        </div>

        <label
          onClick={() => setIsSelected(!isSelected)}
          className="card__label"
          htmlFor={id}
        >
          {name}
        </label>
        <div
          className={
            isSelected ? "card__flag card__flag--selected" : "card__flag"
          }
        ></div>
      </li>
    </>
  );
};

export default SelectNativeLanguageCard;

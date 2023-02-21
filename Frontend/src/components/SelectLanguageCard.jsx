//styles
import "../styles/components/SelectLanguageCard.scss";

//assets
import volumeIcon from "../assets/icons/volume.svg";

import quoteIcon from "../assets/icons/quote.svg";

//libraries
import { useState, useEffect } from "react";
import { useTts } from "tts-react";

const SelectLanguageCard = ({
  formData,
  id,
  name,
  targetQuote,
  code,
  targetQuoteMarks,
  handleTargetLangs,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [quoteMarks, setQuoteMarks] = useState(null);

  useEffect(() => {
    if (formData.targetLangs.includes(id)) {
      setIsSelected(true);
    }
  }, []);
  const audio =
    import.meta.env.VITE_CLOUDFRONT_DOMAIN + "/" + code + "Target.mp3";

  function convertToArray(string) {
    const objects = string.split("\n");
    const result = [];

    for (const obj of objects) {
      if (obj) {
        result.push(JSON.parse(obj));
      }
    }

    return result;
  }

  useEffect(() => {
    if (targetQuoteMarks) {
      setQuoteMarks(convertToArray(targetQuoteMarks));
    } else {
      setQuoteMarks([]);
    }
  }, []);

  console.log(audio);
  const fetchAudioData = () => {
    const details = {
      audio: audio,
      marks: quoteMarks,
    };
    console.log(details);
    return details;
  };
  const ReadThisCard = ({ children }) => {
    console.log("This runs infinitely");

    const { ttsChildren, play } = useTts({
      children,
      markTextAsSpoken: targetQuoteMarks ? true : false,
      markBackgroundColor: "lightgreen",

      fetchAudioData: fetchAudioData,
    });

    return (
      quoteMarks && (
        <div>
          <button className="card__play-button" onClick={play}>
            <img
              className="card__volume-icon"
              src={volumeIcon}
              alt="click to play audio"
            />
          </button>
          {ttsChildren}
        </div>
      )
    );
  };

  return (
    audio &&
    quoteMarks && (
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
            onChange={handleTargetLangs}
          />

          {/* Positioned in order */}
          <div className="card__top">
            <div className="card__check-area">
              <img
                src={
                  import.meta.env.VITE_CLOUDFRONT_DOMAIN + "/" + code + ".svg"
                }
                alt=""
              />
            </div>
          </div>
          <div
            className={
              isSelected
                ? "card__bottom card__bottom--selected"
                : "card__bottom"
            }
          >
            <img className="card__quote-icon" src={quoteIcon} alt="" />
            <ReadThisCard>
              <h3 className="card__quote">{targetQuote}</h3>
            </ReadThisCard>
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
    )
  );
};

export default SelectLanguageCard;

//styles
import "../styles/components/Certificate.scss";
//components

//libraries
import { useState, useEffect } from "react";

const Certificate = ({
  id,
  name,
  code,
  nativeQuote,
  handleNativeLangs,
  formData,
  burst,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (formData.nativeLangs.includes(id)) {
      setIsSelected(true);
    }
  }, []);

  return (
    <>
      <li className={isSelected ? "native native--selected" : "native"}>
        <label
          onClick={() => setIsSelected(!isSelected)}
          className="native__label"
          htmlFor={id}
        >
          {name}
        </label>
        <input
          className="card__checkbox"
          type="checkbox"
          id={id}
          value={id}
          onChange={handleNativeLangs}
        />
        <div className="native__inner">
          <p className="native__quote">
            My English is perfect already. Nobody can mess with how good at
            English I am. It's unbelievable sometimes, even to me.
          </p>
          <div className={burst}></div>
          <p className="native__signature">Acadebeat University</p>
          <div className="native__circle native__circle--tl"></div>
          <div className="native__circle native__circle--bl"></div>
          <div className="native__circle native__circle--br"></div>
          <div className="native__circle native__circle--tr"></div>
        </div>
      </li>
    </>
  );
};

export default Certificate;

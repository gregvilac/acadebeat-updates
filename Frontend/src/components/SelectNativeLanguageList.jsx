import SelectNativeLanguageCard from "./SelectNativeLanguageCard";
import Certificate from "./Certificate";
import "../styles/components/SelectTargetLanguageList.scss";
const SelectNativeLanguageList = ({ content, handleNativeLangs, formData }) => {
  const languageList = content.languages;
  console.log(languageList);
  return (
    <ul className="list">
      {languageList.map((language, index) => (
        <Certificate
          formData={formData}
          id={language.id}
          name={language.name}
          key={language.id}
          code={language.code}
          nativeQuote={language.nativeQuote}
          handleNativeLangs={handleNativeLangs}
          burst={`native__burst native__burst--${index}`}
        />
      ))}
    </ul>
  );
};

export default SelectNativeLanguageList;

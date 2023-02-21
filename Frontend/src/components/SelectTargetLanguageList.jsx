import SelectLanguageCard from "./SelectLanguageCard";
import "../styles/components/SelectTargetLanguageList.scss";
const SelectTargetLanguageList = ({ content, handleTargetLangs, formData }) => {
  const languageList = content.languages;
  console.log(languageList);
  return (
    <ul className="list">
      {languageList.map((language) => (
        <SelectLanguageCard
          formData={formData}
          handleTargetLangs={handleTargetLangs}
          id={language.id}
          name={language.name}
          targetQuote={language.targetQuote}
          key={language.id}
          code={language.code}
          targetQuoteMarks={language.targetQuoteMarks}
        />
      ))}
    </ul>
  );
};

export default SelectTargetLanguageList;

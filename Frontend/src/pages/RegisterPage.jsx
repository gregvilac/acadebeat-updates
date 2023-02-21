//styles
import "../styles/pages/RegisterPage.scss";

//assets
import logo from "../assets/images/acadebeat-logo.svg";
import arrow from "../assets/icons/arrow.svg";
//components

import SelectTargetLanguageList from "../components/SelectTargetLanguageList";
import OnboardingProgress from "../components/OnboardingProgress";
import SelectNativeLanguageList from "../components/SelectNativeLanguageList";
import UserDetailsForm from "../components/UserDetailsForm";
//packages
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const RegisterPage = () => {
  const [step, setStep] = useState(0);
  const { t } = useTranslation(["common"]);

  const formTitles = [
    "What do you want to study?",
    "What are you speaking and writing fluently already?",
    "You know what to do.",
  ];
  const formTips = [
    "Choose as many as you like. Changing them later is easy.",
    "You can also interact with content of your native language. Your comments make the resources better. It's like crowdsourcing.",
    "Fill in all your secrets so we can sell your data to mega corporations.",
  ];
  const [formData, setFormData] = useState({
    targetLangs: [],
    nativeLangs: [],
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    level: "",
  });

  const formDisplay = () => {
    if (step === 0) {
      return (
        <SelectTargetLanguageList
          handleTargetLangs={handleTargetLangs}
          content={data}
          formData={formData}
        />
      );
    } else if (step === 1) {
      return (
        <SelectNativeLanguageList
          content={data}
          handleNativeLangs={handleNativeLangs}
          formData={formData}
        />
      );
    } else return <UserDetailsForm formData={formData} />;
  };
  const handleNext = () => {
    if (step === 0 && formData.targetLangs === 0) {
      return;
    } else if (step === 0 && formData.targetLangs > 0) {
      setStep(1);
    }
    if (step === 1 && formData.nativeLangs === 0) {
      return;
    } else if (step === 1 && formData.nativeLangs > 0) {
      setStep(2);
    }
  };

  function handleTargetLangs(event) {
    if (formData.targetLangs.includes(event.target.value)) {
      let index = formData.targetLangs.indexOf(event.target.value);
      formData.targetLangs.splice(index, 1);
    } else {
      formData.targetLangs.push(event.target.value);
    }
    console.log(formData);
  }

  function handleNativeLangs(event) {
    if (formData.nativeLangs.includes(event.target.value)) {
      let index = formData.nativeLangs.indexOf(event.target.value);
      formData.nativeLangs.splice(index, 1);
    } else {
      formData.nativeLangs.push(event.target.value);
    }
    console.log(formData);
  }

  const GET_LANGUAGES = gql`
    query {
      languages {
        id
        name
        code
        nativeQuote
        targetQuote
        targetQuoteMarks
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LANGUAGES);

  if (loading) return <p>Loading...</p>;
  if (error) {
    alert("That's bad.");
  }

  return (
    <>
      <header className="register__header">
        <div className="register__header-wrapper">
          <Link to="/">
            <img className="register__logo" src={logo} alt="" />
          </Link>
        </div>
      </header>
      <section className="register__main">
        <div className="register__main-wrapper">
          <div className="register__form-section">
            <div className="register__clipboard">
              <div className="register__clipboard-inner">
                <div className="register__clip"></div>
                <div className="progress">
                  {/* <div className="progress__title">Getting Started...</div> */}

                  <div className="progress__main">
                    <div className="progress__step progress__step--1">
                      <div
                        className={
                          step === 0
                            ? "progress__number-div progress__number-div--active"
                            : "progress__number-div"
                        }
                      >
                        <p className="progress__number progress__number">1</p>
                      </div>

                      <h2 className="progress__heading">Target Languages</h2>
                    </div>
                    <div className="progress__step progress__step--2">
                      <div
                        className={
                          step === 1
                            ? "progress__number-div progress__number-div--active"
                            : "progress__number-div"
                        }
                      >
                        <p className="progress__number">2</p>
                      </div>

                      <h2 className="progress__heading">Native Languages</h2>
                    </div>
                    <div className="progress__step progress__step--3">
                      <div
                        className={
                          step === 2
                            ? "progress__number-div progress__number-div--active"
                            : "progress__number-div"
                        }
                      >
                        <p className="progress__number">3</p>
                      </div>

                      <h2 className="progress__heading">User Details</h2>
                    </div>

                    <div className="progress__line"></div>
                  </div>
                </div>

                <div className="register__title-div">
                  <h2 className="register__subtitle">{formTitles[step]}</h2>
                  <h3 className="register__tip">
                    <strong>Tip:</strong> {formTips[step]}
                  </h3>
                </div>
                {data && formDisplay()}

                <div className="register__buttons">
                  <button
                    disabled={step === 0}
                    onClick={() => setStep(step - 1)}
                    className="register__button"
                  >
                    Back
                  </button>
                  <button
                    disabled={step === 2}
                    onClick={handleNext}
                    className="register__button"
                  >
                    Next <img className="register__arrow" src={arrow} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="register__progress-section">
            <OnboardingProgress />
            {/* <OnboardingProgressFlat /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;

import "../styles/components/OnboardingProgressFlat.scss";

const OnboardingProgressFlat = () => {
  return (
    <div className="progress">
      {/* <div className="progress__title">Getting Started...</div> */}

      <div className="progress__main">
        <div className="progress__step progress__step--1">
          <div className="progress__number-div progress__number-div--active">
            <p className="progress__number progress__number">1</p>
          </div>

          <h2 className="progress__heading">Target Languages</h2>
        </div>
        <div className="progress__step progress__step--2">
          <div className="progress__number-div">
            <p className="progress__number">2</p>
          </div>

          <h2 className="progress__heading">Native Languages</h2>
        </div>
        <div className="progress__step progress__step--3">
          <div className="progress__number-div">
            <p className="progress__number">3</p>
          </div>

          <h2 className="progress__heading">User Details</h2>
        </div>

        <div className="progress__line"></div>
      </div>
    </div>
  );
};

export default OnboardingProgressFlat;

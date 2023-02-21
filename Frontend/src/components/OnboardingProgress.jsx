import "../styles/components/OnboardingProgress.scss";

const OnboardingProgress = () => {
  return (
    <div className="register__progress-tracker-div">
      <div className="register__progress-title-div">
        <h2 className="register__progress-title">Getting Started...</h2>
      </div>

      <div className="register__tracker-shape">
        <div className="register__tracker register__tracker--1">
          <h2>Target Languages</h2>
          <h3 className="register__tracker-sub">I am learning...</h3>
        </div>
        <div className="register__tracker register__tracker--2">
          <h2 className="register__tracker-heading">Native Languages</h2>
          <h3 className="register__tracker-sub">I already know...</h3>
        </div>
        <div className="register__tracker register__tracker--3">
          <h2 className="register__tracker-heading">Details</h2>
          <h3 className="register__tracker-sub">
            These are what I'll use to sign in.
          </h3>
        </div>
        <div className="register__tracker register__tracker--4">
          <h2 className="register__tracker-heading">Payment</h2>
          <h3 className="register__tracker-sub">Just kidding it's free.</h3>
        </div>
        {/* <div className="register__tracker-buttons">
          <div className="register__tracker-button register__tracker-button--back">
            Back
          </div>
          <div className="register__tracker-button register__tracker-button--next">
            Next
          </div>
        </div> */}
        <div className="register__tracker-line register__tracker-line--1"></div>
        <div className="register__tracker-line register__tracker-line--2"></div>
        <div className="register__tracker-line register__tracker-line--3"></div>
      </div>
    </div>
  );
};

export default OnboardingProgress;

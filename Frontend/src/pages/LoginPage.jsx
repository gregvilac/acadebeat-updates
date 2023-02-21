//styles
import "../styles/pages/LoginPage.scss";
//Libraries
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useCallback } from "react";
//assets
import logo from "../assets/images/acadebeat-logo.svg";
import emailIcon from "../assets/icons/email.svg";
import passwordIcon from "../assets/icons/password.svg";
import LanguageSwitcher from "../components/LanguageSwitcher";
import googleIcon from "../assets/icons/google-icon.png";

const LoginPage = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const heroSection = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 1.7;
    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "purple";
    context.lineWidth = 3;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <>
      <header className="login__header">
        <div className="login__header-wrapper">
          <Link to="/">
            <img className="login__logo" src={logo} alt="" />
          </Link>
        </div>
      </header>
      <section ref={heroSection} className="login__hero">
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          className="login__canvas"
          ref={canvasRef}
        />
        <div className="login__hero-wrapper">
          <div className="login__hero-text-div">
            <h1 className="login__hero-title">Welcome back!</h1>
            <h3 className="login__hero-sub">...who are you, again?</h3>
          </div>

          <div className="login__hero-form">
            <div>
              <label className="login__hero-label" htmlFor="emailInput">
                Email
              </label>
              <div className="login__hero-input-div">
                <div className="login__hero-input-image-div">
                  <img src={emailIcon} alt="" />
                </div>
                <input
                  placeholder="Enter your email"
                  className="login__hero-input"
                  type="email"
                  id="emailInput"
                />
              </div>
            </div>
            <div>
              <label className="login__hero-label" htmlFor="passwordInput">
                Password
              </label>
              <div className="login__hero-input-div">
                <div className="login__hero-input-image-div login__hero-input-image-div--password">
                  <img src={passwordIcon} alt="" />
                </div>
                <input
                  placeholder="Enter your password"
                  className="login__hero-input"
                  type="password"
                  id="passwordInput"
                />
              </div>
            </div>
          </div>
          <div className="login__hero-remember-forgot-div">
            <div className="login__remember-me-div">
              <label className="toggler-wrapper style-1">
                <input role="checkbox" id="rememberMe" type="checkbox" />
                <div className="toggler-slider">
                  <div className="toggler-knob"></div>
                </div>
              </label>
              <label className="login__hero-forgot" htmlFor="rememberMe">
                Stay logged in
              </label>
            </div>
            <h3 className="login__hero-forgot login__hero-forgot--tablet">
              Forgot Password?
            </h3>
          </div>
          <button className="login__hero-submit">Login</button>
          <p className="login__or">or...</p>
          <button className="login__google-button">
            <img className="login__google-icon" src={googleIcon} alt="" /> Sign
            in with Google
          </button>
          <Link to="/register" className="login__hero-need-account">
            Need an account? Create one.
          </Link>
          <h3 className="login__hero-forgot login__hero-forgot--mobile">
            Forgot your password?
          </h3>
        </div>
      </section>
      <footer className="footer">Footer</footer>
    </>
  );
};

export default LoginPage;

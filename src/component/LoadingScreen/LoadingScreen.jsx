import logo from "../../assets/logos/BrainFlix-logo.svg";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
  return (
    <div className="LoadingScreen">
      <img className="LoadingScreen__logo" src={logo} alt="BrainFlix-Logo" />
    </div>
  );
};

export default LoadingScreen;

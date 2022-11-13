import logo from "../../assets/logos/BrainFlix-logo.svg";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
  return (
    <div className="LoadingScreen">
      <img className="LoadingScreen__logo" src={logo} />
    </div>
  );
};

export default LoadingScreen;

import { Link } from "react-router-dom";
import errorImage from "../../assets/images/error-state.png";
import Navigation from "../../component/Navigation/Navigation";
import "./ErrorPage.scss";

// shows an error page when user publishes video from uploadPage

const ErrorPage = () => {
  return (
    <>
      <Navigation />
      <div className="Error">
        <h1 className="Error__title">Something is wrong.</h1>
        <p className="Error__message">
          We couldn't find the page you were looking for. Check out other
          awesome videos on our home page!
        </p>
        <img
          className="Error__image"
          src={errorImage}
          alt="Dog bit the cable"
        />
        <Link to="/" className="Error__button-wrapper">
          <button className="Error__button">Take me home</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;

import { Link } from "react-router-dom";
import successImage from "../../assets/images/success-state.png";
import Navigation from "../../component/Navigation/Navigation";
import "./SuccessPage.scss";

const SuccessPage = () => {
  return (
    <>
      <Navigation />
      <div className="Success">
        <h1 className="Success__title">Upload success! 🥳</h1>
        <p className="Success__message">
          Your video was published moments ago, you will see it on the home page
          on your next visit.
        </p>
        <img
          className="Success__image"
          src={successImage}
          alt="Dog bit the cable"
        />
        <Link to="/" className="Success__button-wrapper">
          <button className="Success__button">Take me home</button>
        </Link>
      </div>
    </>
  );
};

export default SuccessPage;

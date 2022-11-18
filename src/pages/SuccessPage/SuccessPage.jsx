import { Link } from "react-router-dom";
import successImage from "../../assets/images/success-state.png";
import "./SuccessPage.scss";

// shows a success page when user publishes video from uploadPage

const SuccessPage = () => {
  return (
    <>
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
        <Link to="/" className="Success__button">
          <p className="Success__button-text">Take me home</p>
        </Link>
      </div>
    </>
  );
};

export default SuccessPage;

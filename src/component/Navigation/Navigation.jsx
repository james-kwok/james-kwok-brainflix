import navLogo from "../../assets/logos/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="Nav">
      <a href="/">
        <img className="Nav__logo" src={navLogo} alt="BrainFlix-Logo" />
      </a>
      <div className="Nav__items">
        <div className="Nav__search">
          <div className="Nav__search-bar">
            <img
              className="Nav__search-icon"
              src={searchIcon}
              alt="Search-Icon"
            />
            <input
              className="Nav__search-input"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <img className="Nav__avatar" src={avatar} />
        <div className="Nav__button-wrapper">
          <img
            className="Nav__button-icon"
            src={uploadIcon}
            alt="Upload-Icon"
          />
          <Link to="/upload" className="Nav__button">
            Upload
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navigation;

import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";
import "./UploadForm.scss";

const UploadForm = () => {
  return (
    <div className="Upload">
      <h1 className="Upload__title">Upload Video</h1>
      <div className="Upload__container">
        <div className="Upload__left-container">
          <label className="Upload__label">Video Thumbnail</label>
          <img
            className="Upload__thumbnail"
            src={thumbnail}
            alt="Cycling fast on road"
          />
        </div>
        <div className="Upload__right-container">
          <form className="Upload__form" id="uploadForm">
            <div className="Upload__field">
              <label className="Upload__label">Title of your video</label>
              <input
                className="Upload__input"
                type="text"
                placeholder="Add a title to your video"
              ></input>
            </div>
            <div className="Upload__field Upload__field--border">
              <label className="Upload__label">Add a video description</label>
              <textarea
                className="Upload__textarea"
                placeholder="Add a description to your video"
                name="description"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="Upload__buttons">
        <Link to="/success" className="Upload__button-wrapper">
          <img
            className="Upload__button-icon"
            src={uploadIcon}
            alt="Upload-Icon"
          />
          <button className="Upload__button">Publish</button>
        </Link>
        <div className="Upload__textlink-wrapper">
          <Link to="/" className="Upload__textlink">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;

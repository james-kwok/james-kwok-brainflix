import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/publish.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadForm.scss";
import axios from "axios";

// using useState hook for controlled inputs
const UploadForm = () => {
  // useNavigate hook to handle submit & cancel events
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // function to handle input in title field
  const handleTitleInput = (e) => {
    setFormData({ ...formData, title: e.target.value });
    console.log(e.target.value);
  };

  // function to handle input in description field
  const handleDescriptionInput = (e) => {
    setFormData({ ...formData, description: e.target.value });
    console.log(e.target.value);
  };

  // function to handle the submit event on form
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      // post request to API
      .post("http://localhost:8080/videos", formData)
      .then((response) => {
        navigate("/success");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Upload">
      <form onSubmit={handleSubmit} className="Upload__form">
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
            <div className="Upload__field">
              <label htmlFor="title" className="Upload__label">
                Title of your video
              </label>
              <input
                onChange={handleTitleInput}
                className="Upload__input"
                type="text"
                name="title"
                id="title"
                placeholder="Add a title to your video"
              ></input>
            </div>
            <div className="Upload__field Upload__field--border">
              <label htmlFor="description" className="Upload__label">
                Add a video description
              </label>
              <textarea
                onChange={handleDescriptionInput}
                className="Upload__textarea"
                name="description"
                id="description"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="Upload__buttons">
          <button type="submit" className="Upload__button">
            <img
              className="Upload__button-icon"
              src={uploadIcon}
              alt="Upload-Icon"
            />
            <span className="Upload__button-text">Publish</span>
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="Upload__textlink nohover"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;

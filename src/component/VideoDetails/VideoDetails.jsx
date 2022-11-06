import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDetails.scss";

// This component is to render each video's details page, 
// the onClick trigger in the VideoList component will cause this component to render data dynamically.

const VideoDetails = ({ displayVideo }) => {
  const videoTimestamp = new Date(displayVideo.timestamp).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  return (
    <div className="VideoDetails__container">
      <h1 className="VideoDetails__title">{displayVideo.title}</h1>
      <div className="VideoDetails__stats">
        <p className="VideoDetails__channel">By {displayVideo.channel}</p>
        <div className="VideoDetails__views-container">
          <div className="VideoDetails__icon-container">
            <img className="VideoDetails__views-icon" src={viewsIcon} />
          </div>
          <p className="VideoDetails__views-text">{displayVideo.views}</p>
        </div>
        <p className="VideoDetails__timestamp">{videoTimestamp}</p>
        <div className="VideoDetails__likes-container">
          <div className="VideoDetails__icon-container">
            <img className="VideoDetails__likes-icon" src={likesIcon} />
          </div>
          <p className="VideoDetails__likes-text">{displayVideo.likes}</p>
        </div>
      </div>
      <p className="VideoDetails__description">{displayVideo.description}</p>
      <p className="VideoDetails__comments">
        {displayVideo.comments.length} Comments
      </p>
    </div>
  );
};

export default VideoDetails;

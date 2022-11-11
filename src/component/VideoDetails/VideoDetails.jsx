import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDetails.scss";

const VideoDetails = ({featuredVideo}) => {
  const videoTimestamp = new Date(featuredVideo.timestamp).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  return (
    <div className="VideoDetails__container">
      <h1 className="VideoDetails__title">{featuredVideo.title}</h1>
      <div className="VideoDetails__stats">
        <p className="VideoDetails__channel">By {featuredVideo.channel}</p>
        <div className="VideoDetails__views-container">
          <div className="VideoDetails__icon-container">
            <img
              className="VideoDetails__views-icon"
              src={viewsIcon}
              alt="Views-Icon"
            />
          </div>
          <p className="VideoDetails__views-text">{featuredVideo.views}</p>
        </div>
        <p className="VideoDetails__timestamp">{videoTimestamp}</p>
        <div className="VideoDetails__likes-container">
          <div className="VideoDetails__icon-container">
            <img
              className="VideoDetails__likes-icon"
              src={likesIcon}
              alt="Likes-Icon"
            />
          </div>
          <p className="VideoDetails__likes-text">{featuredVideo.likes}</p>
        </div>
      </div>
      <p className="VideoDetails__description">{featuredVideo.description}</p>
      <p className="VideoDetails__comments">
        {featuredVideo.comments.length} Comments
      </p>
    </div>
  );
};

export default VideoDetails;

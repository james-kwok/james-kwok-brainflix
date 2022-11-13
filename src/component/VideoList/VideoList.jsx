import "./VideoList.scss";
import { Link } from "react-router-dom";

const VideoList = ({ filteredVideos }) => {
  return (
    <div className="VideoList">
      <span className="VideoList__heading">Next Videos</span>
      {filteredVideos.map((video, index) => {
        return (
          // dynamic routes
          <Link
            to={`/videos/${video.id}`}
            key={index}
            className="VideoList__container"
          >
            <img
              className="VideoList__image"
              src={video.image}
              alt={video.title}
            />
            <div className="VideoList__text-container">
              <p className="VideoList__title">{video.title}</p>
              <p className="VideoList__channel">{video.channel}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default VideoList;

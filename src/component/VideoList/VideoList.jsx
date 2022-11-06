import "./VideoList.scss";

const VideoList = ({ displayVideoList, changeVideo, updateVideoList }) => {
  let nonSelectedVideos = [...displayVideoList];
  nonSelectedVideos.splice(0, 1);

  return (
    <div className="VideoList">
      <span className="VideoList__heading">Next Videos</span>
      {nonSelectedVideos.map((video) => {
        return (
          <div
            onClick={() => {
              changeVideo(video.id);
              updateVideoList(video.id);
            }}
            className="VideoList__container"
            key={video.id}
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
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;

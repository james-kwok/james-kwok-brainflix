import "./VideoList.scss";

const VideoList = ({ displayVideoList, changeVideo, updateVideoList }) => {

  // Copying a new array to render the VideoeList without index 0..
  // There might be a better way to do this, but I ran out of time

  let nonSelectedVideos = [...displayVideoList];
  nonSelectedVideos.splice(0, 1);

  // The onClick event will listen for clicks on each video's container element..
  // Then run two functions to dynamically update the components within Section.

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

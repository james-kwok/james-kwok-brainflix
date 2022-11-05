import './VideoList.scss'

const VideoList = ({displayVideoList}) => {
  return (
    <div className="VideoList">
      <span className="VideoList__heading">Next Videos</span>
        {displayVideoList.map((video) => {
            return (
                <div className = "VideoList__container" key = {video.id}>
                    <img className = "VideoList__image" src = {video.image} alt = {video.title} />
                    <div className = "VideoList__text-container">
                        <p className = "VideoList__title">{video.title}</p>
                        <p className = "VideoList__channel">{video.channel}</p>
                    </div>
                </div>
            )
        })}
    </div>
  );
};

export default VideoList;

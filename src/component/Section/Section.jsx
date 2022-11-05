import VideoDetails from "../../component/VideoDetails/VideoDetails.jsx";
import Form from "../../component/Form/Form.jsx";
import Comments from "../../component/Comments/Comments.jsx";
import VideoList from "../../component/VideoList/VideoList.jsx";
import displayDetails from "../../data/video-details.json";
import displayVideos from "../../data/videos.json";
import { useState } from "react";
import './Section.scss';

const Section = () => {
  const [displayVideo, setDisplayVideo] = useState(displayDetails[0]);

  const [displayVideoList, setDisplayVideoList] = useState(displayVideos);

  return (
    <div className="Section">
      <div className="Section__main">
        <VideoDetails displayVideo={displayVideo} />
        <Form />
        <Comments displayVideo={displayVideo} />
      </div>
      <div className="Section__sidebar">
        <VideoList displayVideoList={displayVideoList} />
      </div>
    </div>
  );
};

export default Section;

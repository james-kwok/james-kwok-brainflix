import VideoDetails from "../../component/VideoDetails/VideoDetails.jsx";
import Form from "../../component/Form/Form.jsx";
import Comments from "../../component/Comments/Comments.jsx";
import VideoList from "../../component/VideoList/VideoList.jsx";
import "./Section.scss";

const Section = ({
  displayVideo,
  displayVideoList,
  changeVideo,
  updateVideoList,
}) => {
  return (
    <div className="Section">
      <div className="Section__main">
        <VideoDetails displayVideo={displayVideo} />
        <Form />
        <Comments displayVideo={displayVideo} />
      </div>
      <div className="Section__sidebar">
        <VideoList
          displayVideoList={displayVideoList}
          changeVideo={changeVideo}
          updateVideoList={updateVideoList}
        />
      </div>
    </div>
  );
};

export default Section;

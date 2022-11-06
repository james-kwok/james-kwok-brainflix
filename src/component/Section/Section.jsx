import VideoDetails from "../../component/VideoDetails/VideoDetails.jsx";
import Form from "../../component/Form/Form.jsx";
import Comments from "../../component/Comments/Comments.jsx";
import VideoList from "../../component/VideoList/VideoList.jsx";
import "./Section.scss";

// The Section component house 4 smaller components. The idea was to create this bigger component to meet the design requirements to have a split view for desktop (1280px)..
// I may have to re-think this for future sprints, and will have to refactor if this Section gets too crowded..
// Props here are passed from App.js
// Then I'm passing props here to the smaller components

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

import VideoDetails from "../../component/VideoDetails/VideoDetails.jsx";
import Form from "../../component/Form/Form.jsx";
import Comments from "../../component/Comments/Comments.jsx";
import VideoList from "../../component/VideoList/VideoList.jsx";
import "./Section.scss";

const Section = ({
  videoList,
  featuredVideo
}) => {
  return (
    <div className="Section">
      <div className="Section__main">
        <VideoDetails featuredVideo={featuredVideo} />
        <Form />
        <Comments featuredComments={featuredVideo.comments} />
      </div>
      <div className="Section__sidebar">
        <VideoList
        videoList={videoList}
        />
      </div>
    </div>
  );
};

export default Section;

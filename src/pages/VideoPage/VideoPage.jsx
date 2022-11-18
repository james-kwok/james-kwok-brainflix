import Hero from "../../component/Hero/Hero";
import Section from "../../component/Section/Section";
import LoadingScreen from "../../component/LoadingScreen/LoadingScreen";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// URL for sprint-3
const URL = "http://localhost:8080/videos";

const VideoPage = () => {
  const { videoId } = useParams();
  const [videoList, setVideoList] = useState(null);
  const [featuredVideo, setFeaturedVideo] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}`, {})
      .then((response) => {
        // intentionally delaying setState for LoadingScreen to simulate data loading
        setTimeout(() => {
          setVideoList(response.data);
        }, 1500);
        // storing the initial featuredVideo to load in "id" variable
        const id = response.data[0].id;
        // if no videos in videoList is clicked, this checks for that and returns the URL with the "id" variable
        if (!videoId) {
          return axios.get(`${URL}/${id}`);
        } else {
          return axios.get(`${URL}/${videoId}`);
        }
      })
      // response here can be either url depending on user action
      .then((response) => {
        window.scrollTo(0, 0);
        setFeaturedVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      // this useEffect listens to changes in params value
  }, [videoId]);

  // if neither videoList or featuredVideo is loaded, the LoadingScreen component gets served

  if (!videoList || !featuredVideo) {
    return <LoadingScreen />;
  }

  // filtering out the video from videoList that is currently the featuredVideo

  const filteredVideos = videoList.filter((video) => {
    return video.id !== featuredVideo.id;
  });

  return (
    <>
      <Hero image={featuredVideo} />
      <Section filteredVideos={filteredVideos} featuredVideo={featuredVideo} />
    </>
  );
};

export default VideoPage;

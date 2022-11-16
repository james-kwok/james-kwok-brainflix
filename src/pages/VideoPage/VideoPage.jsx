import Navigation from "../../component/Navigation/Navigation";
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
        const id = response.data[0].id;
        if (!videoId) {
          return axios.get(`${URL}/${id}`);
        } else {
          return axios.get(`${URL}/${videoId}`);
        }
      })
      .then((response) => {
        setFeaturedVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [videoId]);

  if (!videoList || !featuredVideo) {
    return <LoadingScreen />;
  }

  // filtering out the video from videoList that is currently the featuredVideo

  const filteredVideos = videoList.filter((video) => {
    return video.id !== featuredVideo.id;
  });

  return (
    <>
      <Navigation />
      <Hero image={featuredVideo} />
      <Section filteredVideos={filteredVideos} featuredVideo={featuredVideo} />
    </>
  );
};

export default VideoPage;

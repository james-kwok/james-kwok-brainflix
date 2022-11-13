import Navigation from "../../component/Navigation/Navigation";
import Hero from "../../component/Hero/Hero";
import Section from "../../component/Section/Section";
import LoadingScreen from "../../component/LoadingScreen/LoadingScreen";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const URL = "https://project-2-api.herokuapp.com/videos";
const key = "?api_key=3689c5d3-300f-4b3c-af6f-dc866897da95";

const VideoPage = () => {
  const { videoId } = useParams();
  const [videoList, setVideoList] = useState(null);
  const [featuredVideo, setFeaturedVideo] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/${key}`, {})
      .then((response) => {
        setTimeout(() => {
          setVideoList(response.data);
        }, 1500)
        const id = response.data[0].id;
        if (!videoId) {
          return axios.get(`${URL}/${id}/${key}`);
        } else {
          return axios.get(`${URL}/${videoId}/${key}`);
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

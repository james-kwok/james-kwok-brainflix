import Navigation from "../../component/Navigation/Navigation";
import Hero from "../../component/Hero/Hero";
import Section from "../../component/Section/Section";
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
        setVideoList(response.data);
        return axios.get(`${URL}/${videoId}/${key}`, {});
      })
      .then((response) => {
        setFeaturedVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [videoId]);

  if (!videoList || !featuredVideo) {
    return <h1>loading...</h1>;
  }

  const filteredVideos = videoList.filter((video) => {
    return video.id !== featuredVideo.id;
  });

  return (
    <>
      <Navigation />
      <Hero image={featuredVideo} />
      <Section filteredVideos={filteredVideos} featuredVideo={featuredVideo} />3
    </>
  );
};

export default VideoPage;

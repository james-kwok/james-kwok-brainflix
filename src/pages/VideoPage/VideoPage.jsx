import Hero from "../../component/Hero/Hero";
import Section from "../../component/Section/Section";
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://project-2-api.herokuapp.com";
const key = "3689c5d3-300f-4b3c-af6f-dc866897da95";

const VideoPage = () => {
  const [video, setVideo] = useState();
//   const { id, title, channel, image } = video;

  const [featuredVideo, setFeaturedVideo] = useState();
//   const { description, views, likes, timestamp, comments } = featuredVideo;

  useEffect(() => {
    axios.get(`${URL}/videos?api_key=${key}`).then((response) => {
      setVideo(response.data);
    });
  }, [video]);

  useEffect(() => {
    axios.get(`${URL}/videos/${featuredVideo.id}?api_key=${key}`).then((response) => {
        setFeaturedVideo(response.data);
    },[featuredVideo])
  })

  return (
    <>
      <Hero image={image} />
      <Section video={video} featuredVideo={featuredVideo} />
    </>
  );
};

export default VideoPage;

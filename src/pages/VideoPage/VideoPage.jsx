import videosData from "../../data/videos.json";
import videoDetailsData from "../../data/video-details.json";
import Navigation from "../../component/Navigation/Navigation";
import Hero from "../../component/Hero/Hero";
import Section from "../../component/Section/Section";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";

// const URL = "https://project-2-api.herokuapp.com";
// const key = "3689c5d3-300f-4b3c-af6f-dc866897da95";

const VideoPage = () => {
  const { videoId } = useParams();
  const [videoList] = useState(videosData);
  const [featuredVideo, setFeaturedVideo] = useState(videoDetailsData[0]);

  useEffect(() => {
    if (!videoId) {
      return;
    }
    const foundVideo = videoDetailsData.find((video) => videoId === video.id);
    setFeaturedVideo(foundVideo);
  }, [videoId]);

  const filteredVideos = videoList.filter(
    (video) => video.id !== featuredVideo.id
  );

  return (
    <>
      <Navigation />
      <Hero image={featuredVideo} />
      <Section videoList={filteredVideos} featuredVideo={featuredVideo} />
    </>
  );
};

export default VideoPage;

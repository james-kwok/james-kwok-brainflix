import Navigation from "./component/Navigation/Navigation.jsx";
import Hero from "./component/Hero/Hero.jsx";
import Section from "./component/Section/Section.jsx";
import displayDetails from "./data/video-details.json";
import displayVideos from "./data/videos.json";
import { useState } from "react";
import "./App.scss";

function App() {
  const [displayVideo, setDisplayVideo] = useState(displayDetails[0]);
  const [displayVideoList, setDisplayVideoList] = useState(displayVideos);

  function changeVideo(videoId) {
    const selectedVideo = displayDetails.find((video) => {
      return videoId === video.id;
    });
    setDisplayVideo(selectedVideo);
  }

  function updateVideoList(videoId) {
    const displayVideosCopy = [...displayVideos];
    const videoToUpdate = displayVideosCopy.find((video) => {
      return videoId === video.id;
    });
    displayVideosCopy.splice(displayVideosCopy.indexOf(videoToUpdate), 1);
    displayVideosCopy.unshift(displayVideosCopy[0]);
    setDisplayVideoList(displayVideosCopy);
  }

  return (
    <>
      <Navigation />
      <Hero displayVideo={displayVideo} />
      <Section
        displayVideo={displayVideo}
        displayVideoList={displayVideoList}
        changeVideo={changeVideo}
        updateVideoList={updateVideoList}
      />
    </>
  );
}
export default App;

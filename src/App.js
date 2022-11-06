import Navigation from "./component/Navigation/Navigation.jsx";
import Hero from "./component/Hero/Hero.jsx";
import Section from "./component/Section/Section.jsx";
import displayDetails from "./data/video-details.json";
import displayVideos from "./data/videos.json";
import { useState } from "react";
import "./App.scss";

function App() {

  // Initialized states here with the below two state variables
  const [displayVideo, setDisplayVideo] = useState(displayDetails[0]);
  const [displayVideoList, setDisplayVideoList] = useState(displayVideos);

  // This function will check video IDs and update state with the set function
  function changeVideo(videoId) {
    const selectedVideo = displayDetails.find((video) => {
      return videoId === video.id;
    });
    setDisplayVideo(selectedVideo);
  }

  // This function allows the VideoList component to remove the selected video ID and replaces that specific index with the previous video..
  // The unshift method is used to unshift the default video at index 0 back into the array copy.. 
  // Slight UX problem here because the BMX video is always at the start of the list, I will address this in a future build.. (if it needs to be)

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

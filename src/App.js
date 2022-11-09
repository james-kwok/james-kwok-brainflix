import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./pages/VideoPage/VideoPage.jsx";
import UploadPage from "./pages/UploadPage/UploadPage.jsx";
import "./App.scss";

function App() {
  // // Initialized states here with the below two state variables
  // const [displayVideo, setDisplayVideo] = useState(displayDetails[0]);
  // const [displayVideoList, setDisplayVideoList] = useState(displayVideos);

  // // This function will check video IDs and update state with the set function
  // function changeVideo(videoId) {
  //   const selectedVideo = displayDetails.find((video) => {
  //     return videoId === video.id;
  //   });
  //   setDisplayVideo(selectedVideo);
  // }

  // // This function allows the VideoList component to remove the selected video ID and replaces that specific index with the previous video..
  // // The unshift method is used to unshift the default video at index 0 back into the array copy..
  // // Slight UX problem here because the BMX video is always at the start of the list, I will address this in a future build.. (if it needs to be)

  // function updateVideoList(videoId) {
  //   const displayVideosCopy = [...displayVideos];
  //   const videoToUpdate = displayVideosCopy.find((video) => {
  //     return videoId === video.id;
  //   });
  //   displayVideosCopy.splice(displayVideosCopy.indexOf(videoToUpdate), 1);
  //   displayVideosCopy.unshift(displayVideosCopy[0]);
  //   setDisplayVideoList(displayVideosCopy);
  // }

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="videos/:id" element={<VideoPage />} />
        <Route path="upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

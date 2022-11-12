import VideoPage from "./pages/VideoPage/VideoPage.jsx";
import UploadPage from "./pages/UploadPage/UploadPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="videos/:videoId" element={<VideoPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

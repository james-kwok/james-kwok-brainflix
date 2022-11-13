import VideoPage from "./pages/VideoPage/VideoPage.jsx";
import UploadPage from "./pages/UploadPage/UploadPage.jsx";
import SuccessPage from "./pages/SuccessPage/SuccessPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    // router and routes defined here
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="videos/:videoId" element={<VideoPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

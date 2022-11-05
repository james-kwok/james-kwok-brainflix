import Navigation from './component/Navigation/Navigation.jsx';
import Hero from './component/Hero/Hero.jsx';
import VideoDetails from './component/VideoDetails/VideoDetails.jsx';
import Form from './component/Form/Form.jsx';
import Comments from './component/Comments/Comments.jsx';
import VideoList from './component/VideoList/VideoList.jsx';
import displayDetails from './data/video-details.json';
import displayVideos from './data/videos.json';
import { useState } from "react";
import './App.scss';

function App() {

    const [ displayVideo, setDisplayVideo] = useState(displayDetails[0])

    const [ displayVideoList, setDisplayVideoList] = useState(displayVideos);

    return (
        <>
        <Navigation />
        <Hero />
        <VideoDetails displayVideo = {displayVideo}/>
        <Form />
        <Comments displayVideo = {displayVideo}/>
        <VideoList displayVideoList = {displayVideoList} />
        </>
    );
}
export default App;
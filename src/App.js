import Navigation from './component/Navigation/Navigation.jsx';
import Hero from './component/Hero/Hero.jsx';
import VideoDetails from './component/VideoDetails/VideoDetails.jsx';
import displayDetails from './data/video-details.json';
import { useState } from "react";
import './App.scss';

function App() {

    const [ displayVideo, setDisplayVideo] = useState(displayDetails[0])

    return (
    <>
        <Navigation />
        <Hero />
        <VideoDetails displayVideo = {displayVideo}/>
    </>
    );
}
export default App;
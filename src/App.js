import Navigation from './component/Navigation/Navigation.jsx';
import Hero from './component/Hero/Hero.jsx';
import VideoDetails from './component/VideoDetails/VideoDetails.jsx';
import Form from './component/Form/Form.jsx';
import Comments from './component/Comments/Comments.jsx';
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
        <Form />
        <Comments displayVideo = {displayVideo}/>
    </>
    );
}
export default App;
import videoImage from "../../data/video-details.json";
import './Hero.scss'

const Hero = () => {

    let videoPoster = videoImage[0].image;

    return (
        <div className = "hero">
            <video className = "hero__video" poster = {videoPoster} controls> </video>
        </div>
    )
}

export default Hero
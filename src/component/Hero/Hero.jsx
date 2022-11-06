import "./Hero.scss";

const Hero = ({ displayVideo }) => {
  return (
    <div className="Hero">
      <video
        className="Hero__video"
        poster={displayVideo.image}
        alt={displayVideo.title}
        controls
      ></video>
    </div>
  );
};

export default Hero;

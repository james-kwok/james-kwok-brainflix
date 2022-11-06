import "./Hero.scss";

const Hero = ({ displayVideo }) => {
  return (
    <div className="hero">
      <video
        className="hero__video"
        poster={displayVideo.image}
        controls
      ></video>
    </div>
  );
};

export default Hero;

import "./Hero.scss";

const Hero = ({ displayVideo }) => {
  // I tried to style the video controls attribute, however I'm not too sure how to acheive it without the need to create one from scratch..
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

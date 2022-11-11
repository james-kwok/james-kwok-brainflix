import "./Hero.scss";

const Hero = ({ image }) => {
  // I tried to style the video controls attribute, however I'm not too sure how to acheive it without the need to create one from scratch..
  return (
    <div className="Hero">
      <video
        className="Hero__video"
        poster={image.image}
        alt={image.title}
        controls
      ></video>
    </div>
  );
};

export default Hero;

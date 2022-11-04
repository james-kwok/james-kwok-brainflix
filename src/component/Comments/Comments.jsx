import "./Comments.scss";

const Comments = ({ displayVideo }) => {
  const { comments } = displayVideo;

  //   const convertTimestamp = new Date(comments.timestamp).toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  // });

  return (
    <div className="comments">
      {displayVideo.comments.map((comments) => {
        return (
          <div className="comments__card" key={comments.id}>
            <div className="comments__placeholder"></div>
            <div className="comments__text-container">
              <p className="comments__name">{comments.name}</p>
              <p className="comments__timestamp">
                {new Date(comments.timestamp).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
              <p className="comments__comment-text">{comments.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;

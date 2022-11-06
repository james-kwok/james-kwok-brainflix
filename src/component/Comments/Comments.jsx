import "./Comments.scss";

const Comments = ({ displayVideo }) => {
  const { comments } = displayVideo;

  return (
    <div className="Comments">
      {comments.map((comments) => {
        return (
          <div className="Comments__card" key={comments.id}>
            <div className="Comments__placeholder"></div>
            <div className="Comments__text-container">
              <p className="Comments__name">{comments.name}</p>
              <p className="Comments__timestamp">
                {new Date(comments.timestamp).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
              <p className="Comments__comment-text">{comments.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;

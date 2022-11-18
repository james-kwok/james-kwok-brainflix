import "./Form.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";

// separated the Form component to anticipate for future builds that may have additional form fields

const Form = () => {
  return (
    <div className="Form">
      <img className="Form__avatar" src={avatar} alt="Mohan-Muruge-Portrait" />
      <form className="Form__container" id="commentForm">
        <div className="Form__field">
          <label className="Form__label">Join The Conversation</label>
          <textarea
            className="Form__input"
            placeholder="Add a new comment"
            name="comment"
          ></textarea>
        </div>
        <button className="Form__button">
          <img
            className="Form__button-icon"
            src={commentIcon}
            alt="Comment-Icon"
          />
          <span className="Form__button-text">Comment</span>
        </button>
      </form>
    </div>
  );
};

export default Form;

import "./Form.scss";
import avatar from '../../assets/images/Mohan-muruge.jpg'
import commentIcon from '../../assets/icons/add_comment.svg'

const Form = () => {

    return (
        <div className = "Form">
            <img className = "Form__avatar" src = {avatar} alt = "Mohan-Muruge-Portrait" />
            <form className = "Form__container" id = "commentForm">
                <div className = "Form__field">
                    <label className = "Form__label">Join The Conversation</label>
                    <textarea className = "Form__input" placeholder = "Add a new comment" name = "comment" ></textarea>
                </div>
                <div className = "Form__button-wrapper">
                    <img className = "Form__button-icon" src = {commentIcon} alt = "Comment-Icon" />
                    <button className = "Form__button">Comment</button>
                </div>
            </form>
        </div>
    )
}

export default Form
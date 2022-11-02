import navLogo from '../../assets/logos/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import searchIcon from '../../assets/icons/search.svg';
import uploadIcon from '../../assets/icons/upload.svg';
import './Navigation.scss'

const Navigation = () => {
    return (
        <div className = "nav">
            <img className = "nav__logo" src = {navLogo} />
            <div className = "nav__items">
                <div className = "nav__search">
                    <div className = "nav__search-bar">
                        <img className = "nav__search-icon" src = {searchIcon} />
                        <input className = "nav__search-input" type = "text" placeholder = "Search" />
                    </div>
                </div>
                <img className = "nav__avatar" src = {avatar}/>
                <div className = "nav__button-wrapper">
                    <img className = "nav__button-icon" src = {uploadIcon} />
                    <a className = "nav__button">Upload</a>
                </div>
            </div>
        </div>
    )
}
export default Navigation
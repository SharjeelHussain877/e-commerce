import './style.scss'
import { googleIcon, facebookIcon } from '../assets';
const GoogleSignUp = () => {
    return (
        <div className='other-signup'>
            <div>
                <img src={googleIcon} alt="google-icon" />
                <span>Continue with Google</span>
            </div>
            <div>
                <img src={facebookIcon} alt="facebook-icon" />
                <span>Continue with Facebook</span>
            </div>
        </div>
    )
}

export default GoogleSignUp;